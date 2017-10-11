package kz.greetgo.education.controller.controller;

import kz.greetgo.depinject.core.Bean;
import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.education.controller.model.UserInfo;
import kz.greetgo.education.controller.register.UserRegister;
import kz.greetgo.education.controller.utils.Controller;
import kz.greetgo.mvc.annotations.Mapping;
import kz.greetgo.mvc.annotations.Par;
import kz.greetgo.mvc.annotations.ToJson;

@Bean
@Mapping("/user")
public class UserController implements Controller {

  public BeanGetter<UserRegister> userRegister;

  @ToJson
  @Mapping("/info")
  public UserInfo getUserInfo(@Par("personId") String personId) {
    System.out.println(personId);
    return userRegister.get().getUserInfo(personId);
  }

}
