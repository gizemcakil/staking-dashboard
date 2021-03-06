import { shallowMount } from "@vue/test-utils"
import Avatar from "common/Avatar"

describe(`Avatar`, () => {
  it("should show an avatar", () => {
    const wrapper = shallowMount(Avatar, {
      props: {
        address: "cosmos1234"
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
