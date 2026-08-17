import { existsSync, readFileSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { homedir } from "node:os";

/**
 * Recursively scans upward from a starting path to find the logical root of the project.
 * 
 * Resolution order:
 * 1. Checks if any parent path is registered in the global ~/.t4g/projects.json registry.
 * 2. Scans upward for explicit project boundary markers (.git or .t4g).
 * 3. Scans upward for package manager markers (package.json).
 * 
 * If no root is found, it returns the original starting path.
 *
 * @param startPath - The initial directory path to start searching from.
 * @returns The resolved absolute path to the project root.
 */
export function findProjectRoot(startPath: string): string {
  const currentPath = resolve(startPath);
  
  // 1. Check global registry first
  const registryPath = join(homedir(), ".t4g", "projects.json");
  if (existsSync(registryPath)) {
    try {
      const registry = JSON.parse(readFileSync(registryPath, "utf8"));
      if (Array.isArray(registry)) {
        const sortedRegistry = [...registry].sort((a, b) => b.length - a.length);
        for (const project of sortedRegistry) {
          if (currentPath === project || currentPath.startsWith(project + '/')) {
            return project;
          }
        }
      }
    } catch (e) {}
  }

  // 2. Scan upwards for explicit project markers
  let currentDir = currentPath;
  while (currentDir !== '/') {
    if (existsSync(join(currentDir, '.git')) || existsSync(join(currentDir, '.t4g'))) {
      return currentDir;
    }
    currentDir = dirname(currentDir);
  }

  // 3. Fallback to package manager markers
  currentDir = currentPath;
  while (currentDir !== '/') {
    if (existsSync(join(currentDir, 'package.json'))) {
      return currentDir;
    }
    currentDir = dirname(currentDir);
  }

  return currentPath;
}
