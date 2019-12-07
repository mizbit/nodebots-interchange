
const Interchange = require('../lib/interchange');

const creators = require('../lib/firmwares.json').creators;
const firmwares = require('../lib/firmwares.json').firmwares;

let interchange;

const interchange_shape = () => describe('1.Shape of the interchange object is correct', () => {
  // Check that all of the lib works properly.
  beforeAll(() => {
    interchange = new Interchange();
  });


  test('1.1 Can we list the firmwares', () => {
    // console.log(interchange);
    expect(interchange.list_devices()).toBeDefined();
    const f = interchange.list_devices()[0];
    expect(f.name).toBeDefined();
    expect(f.firmata).toBeDefined();
    expect(f.description).toBeDefined();
  });

  test('1.2 can we get the ports', () => {
    // do this as a promise and then execute
    return interchange.get_ports().then(ports => {
      expect(ports).toBeDefined();
    });
  });

  test('1.3 Does list ports return the same as get ports', async() => {
    const list = await interchange.list_ports();
    const get = await interchange.get_ports();
    expect(list).toBeDefined();
    expect(get).toBeDefined();
    expect(get).toEqual(list);
  });
});

interchange_shape();
