import { siAstro, siPostgresql, siReact, siRust, siSqlite, siSvelte, siTypescript } from 'simple-icons';
import c from '../assets/c.png';
import cpp from '../assets/cpp.png';
import py from '../assets/py.png';
import freertos from '../assets/freertos.png';
import idf from '../assets/idf.png';
import hal from '../assets/hal.png';
import cmake from '../assets/cmake.png';
import gtest from '../assets/gtest.png';
import unity from '../assets/unity.png';

export interface Tech {
  name: string;
  color: string;
  /** Raster logo from src/assets. */
  icon?: ImageMetadata;
  /** SVG path data (24x24 viewBox) from simple-icons. */
  svgPath?: string;
}

export interface TechGroup {
  title: string;
  items: Tech[];
}

export const techGroups: TechGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'C', icon: c, color: '#0b5ea8' },
      { name: 'C++', icon: cpp, color: '#7a1fa2' },
      { name: 'Rust', svgPath: siRust.path, color: '#a5430f' },
      { name: 'Python', icon: py, color: '#1b6b2f' },
      { name: 'TypeScript', svgPath: siTypescript.path, color: '#2b63a8' },
    ],
  },
  {
    title: 'Web',
    items: [
      { name: 'Astro', svgPath: siAstro.path, color: '#8a2fb5' },
      { name: 'Svelte', svgPath: siSvelte.path, color: '#c4310a' },
      { name: 'React', svgPath: siReact.path, color: '#1f6f86' },
    ],
  },
  {
    title: 'Backend & cloud',
    items: [
      { name: 'AWS', color: '#b36a00' },
      { name: 'PostgreSQL', svgPath: siPostgresql.path, color: '#2f4f9e' },
      { name: 'SQLite', svgPath: siSqlite.path, color: '#0b4b6b' },
    ],
  },
  {
    title: 'Embedded',
    items: [
      { name: 'Zephyr', color: '#5b2a86' },
      { name: 'FreeRTOS', icon: freertos, color: '#a8101c' },
      { name: 'ESP-IDF', icon: idf, color: '#8a1a1a' },
      { name: 'STM32Cube', icon: hal, color: '#0a4d8c' },
    ],
  },
  {
    title: 'Build & test',
    items: [
      { name: 'CMake', icon: cmake, color: '#1f6f3f' },
      { name: 'GTest', icon: gtest, color: '#b36a00' },
      { name: 'Unity', icon: unity, color: '#444' },
    ],
  },
];
