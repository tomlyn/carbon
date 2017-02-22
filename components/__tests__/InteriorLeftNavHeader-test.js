import React from 'react';
import InteriorLeftNavHeader from '../InteriorLeftNavHeader';
import Icon from '../Icon';
import Link from '../Link';
import { shallow, mount } from 'enzyme';

describe('InteriorLeftNavHeader', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <InteriorLeftNavHeader
        className="extra-class"
      />
    );
    const mounted = mount(
      <InteriorLeftNavHeader
        previousPageText="text"
        previousPageHref="href"
      />
    );

    it('renders a interior left nav header', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('has the expected classes', () => {
      expect(wrapper.hasClass('bx--inline-left-nav__header')).toEqual(true);
    });
    it('should add extra classes that are passed via className', () => {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('should use correct icon', () => {
      const icon = wrapper.find(Icon);
      expect(icon.props().name).toEqual('arrow--left');
    });
    it('should use correct icon class names', () => {
      const icon = wrapper.find(Icon);
      expect(icon.props().className).toEqual('bx--inline-left-nav__icon');
    });
    it('should have previousPageText', () => {
      const link = mounted.find(Link);
      expect(link.find('a').text()).toContain('text');
    });
    it('should have previousPageHref', () => {
      const link = mounted.find(Link);
      expect(link.props().href).toEqual('href');
    });
  });
});
