// Такой необычный импорт связан с тем,
// что assert, экспортируемый по умолчанию, считается устаревшим
// Правильно использовать strict
import { strict as assert } from 'assert';
import { capitalize } from '../src/capitalize.js';

// Проверка сменилась с отрицательной на положительную
// При таком способе вывод сообщения об ошибке крайне неинформативный.
assert(capitalize('') === '');
assert(capitalize('hello') === 'Hello');



// Первый параметр actual – то, что пришло
// Второй параметр expected – то, что ожидает тест
// Правильный порядок аргументов имеет большое значение при анализе ошибки
assert.strictEqual(capitalize(''), '');
assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize('hello'), 'hello');