import { strict as assert } from 'assert';
import { capitalize } from '../src/capitalize.js';

// Первый параметр actual – то, что пришло
// Второй параметр expected – то, что ожидает тест
// Правильный порядок аргументов имеет большое значение при анализе ошибки
assert.strictEqual(capitalize(''), '');
assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize('hello'), 'hello'); // err (проверяем как будет выглядеть ошибка)
// Функция strictEqual(actual, expected) проверяет равенство по ссылке.
// То есть два разных объекта, имеющих одинаковое содержание, рассматриваются как не эквивалентные
// Для сравнения по значению используется ещё одно утверждение: assert.deepEqual(actual, expected).
// Для тестирования негативных сценариев предназначены функции
// assert.notStrictEqual(actual, expected) и assert.notDeepStrictEqual(actual, expected).
// Они тестируют то, что значения не равны