import { buf, getBuffer } from '../buffer';

test('buffer convert to string', () => {
    buf.load(getBuffer());
    const result = buf.toString()
    expect(typeof(result)).toBe('string')
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}')
})