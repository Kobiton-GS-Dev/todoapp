import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './'

describe('<App /> with no props', () => {
  const wrapper = shallow(<App />)

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
