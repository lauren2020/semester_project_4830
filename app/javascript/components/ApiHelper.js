const baseEndpoint = "http://localhost:4000/"
export const ApiHelper = {
    CREATE_GROUP_ENDPOINT: baseEndpoint + "create_group",
    ADD_MEMBER_TO_GROUP_ENDPOINT: id => baseEndpoint + "groups/" + id + "/add_member",
    INVITE_USER_TO_GROUP: id => baseEndpoint + "groups/" + id + "/send_invite"
    //CREATE_POST_ENDPOINT: baseEndpoint + "new_device/create",
  }