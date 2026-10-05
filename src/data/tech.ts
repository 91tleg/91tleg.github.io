import {
  siAstro,
  siC,
  siCmake,
  siCplusplus,
  siEspressif,
  siPostgresql,
  siPython,
  siReact,
  siRust,
  siSqlite,
  siStmicroelectronics,
  siSvelte,
  siTypescript,
} from 'simple-icons';
import freertos from '../assets/freertos.png';
import zephyr from '../assets/zephyr.svg';
import aws from '../assets/aws.svg';
import gtest from '../assets/gtest.png';
import unity from '../assets/unity.png';

// Logos in src/assets (zephyr.svg, aws.svg) are from Wikimedia Commons. Zephyr is the project's
// kite mark with the wordmark removed. All names and logos are trademarks of their owners.
export interface Tech {
  name: string;
  color: string;
  /** Fill the square logo slot and cut the rest off. Value is the CSS object-position. */
  cutOff?: string;
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
      { name: 'C', svgPath: siC.path, color: '#0b5ea8' },
      { name: 'C++', svgPath: siCplusplus.path, color: '#7a1fa2' },
      { name: 'Rust', svgPath: siRust.path, color: '#a5430f' },
      { name: 'Python', svgPath: siPython.path, color: '#1b6b2f' },
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
      { name: 'AWS', icon: aws, color: '#b36a00', cutOff: '0% 50%' },
      { name: 'PostgreSQL', svgPath: siPostgresql.path, color: '#2f4f9e' },
      { name: 'SQLite', svgPath: siSqlite.path, color: '#0b4b6b' },
    ],
  },
  {
    title: 'Embedded',
    items: [
      { name: 'Zephyr', icon: zephyr, color: '#5b2a86', cutOff: '100% 50%' },
      { name: 'FreeRTOS', icon: freertos, color: '#a8101c' },
      { name: 'ESP-IDF', svgPath: siEspressif.path, color: '#8a1a1a' },
      { name: 'STM32Cube', svgPath: siStmicroelectronics.path, color: '#0a4d8c' },
    ],
  },
  {
    title: 'Build & test',
    items: [
      { name: 'CMake', svgPath: siCmake.path, color: '#1f6f3f' },
      { name: 'GTest', icon: gtest, color: '#b36a00' },
      { name: 'Unity', icon: unity, color: '#444' },
    ],
  },
];
