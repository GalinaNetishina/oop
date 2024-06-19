import { buf, getBuffer } from '../buffer';

test('buffer convert to string', () => {
    buf.load(getBuffer());
    expect(buf.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}')
})