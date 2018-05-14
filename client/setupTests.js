const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
require('mock-local-storage');

Enzyme.configure({ adapter: new Adapter() });
