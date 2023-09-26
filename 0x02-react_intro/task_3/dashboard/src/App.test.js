import { shallow } from 'enzyme';
import App from './App.js';

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  wrapper;
});
  
it('renders App-header', () => {
  expect(wrapper.find('header.App-header').exists()).toEqual(true);
});

it('renders App-body', () => {
  expect(wrapper.find('main.App-body').exists()).toEqual(true);
});

it('renders App-footer', () => {
  expect(wrapper.find('footer.App-footer').exists()).toEqual(true);
});