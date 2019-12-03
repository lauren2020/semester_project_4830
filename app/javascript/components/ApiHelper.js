const baseEndpoint = "http://localhost:4000/"
export const ApiHelper = {
    CREATE_GROUP_ENDPOINT: baseEndpoint + "create_group",
    ADD_MEMBER_TO_GROUP_ENDPOINT: id => baseEndpoint + "groups/" + id + "/add_member",
    INVITE_USER_TO_GROUP: id => baseEndpoint + "groups/" + id + "/send_invite",
    ACCEPT_GROUP_INVITE_ENDPOINT: id => baseEndpoint + "groups/" + id + "/accept_invite",
    INVITE_USER_TO_CONNECT_ENDPOINT: id => baseEndpoint + "user/" + id + "/send_connection_invite",
    INVITE_USER_TO_CONNECT_BY_USERNAME_ENDPOINT: id => baseEndpoint + "user/" + id + "/send_connection_invite_by_username",
    ACCEPT_CONNECTION_INVITE_ENDPOINT: id => baseEndpoint + "user/" + id + "/accept_connection_invite",
    POST_TO_USER_ENDPOINT: id => baseEndpoint + "user/" + id + "/post_to_user",
    POST_TO_GROUP_ENDPOINT: id => baseEndpoint + "user/" + id + "/post_to_group",
    ADD_LIKE_TO_POST_ENDPOINT: id => baseEndpoint + "user/" + id + "/like_post",
    ADD_COMMENT_TO_POST_ENDPOINT: id => baseEndpoint + "user/" + id + "/comment_on_post"
  }