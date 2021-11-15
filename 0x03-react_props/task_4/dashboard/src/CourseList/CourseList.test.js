import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { expect } from 'chai';
import CourseList from './CourseList';

configure({ adapter: new Adapter() })
describe('<CourseList />', () => {
  const wrapper = shallow(<CourseList />);
  it('renders without crashing', () => {
    expect(wrapper.exists());
  });
  it('renders rows', () => {
    const row = wrapper.find('CourseListRow');
    expect(row).to.have.lengthOf(5);
    expect(row.at(0).prop('textFirstCell')).to.equal('Available courses');
    expect(row.at(0).prop('isHeader')).to.equal(true);
    expect(row.at(1).prop('textFirstCell')).to.equal('Course name');
    expect(row.at(1).prop('textSecondCell')).to.equal('Credit');
    expect(row.at(1).prop('isHeader')).to.equal(true);
    expect(row.at(2).prop('textFirstCell')).to.equal('ES6');
    expect(row.at(2).prop('textSecondCell')).to.equal('60');
    expect(row.at(2).prop('isHeader')).to.equal(false);
    expect(row.at(3).prop('textFirstCell')).to.equal('Webpack');
    expect(row.at(3).prop('textSecondCell')).to.equal('20');
    expect(row.at(3).prop('isHeader')).to.equal(false);
    expect(row.at(4).prop('textFirstCell')).to.equal('React');
    expect(row.at(4).prop('textSecondCell')).to.equal('40');
    expect(row.at(4).prop('isHeader')).to.equal(false);
  });
});