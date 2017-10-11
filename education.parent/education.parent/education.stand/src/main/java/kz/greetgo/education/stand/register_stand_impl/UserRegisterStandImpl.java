package kz.greetgo.education.stand.register_stand_impl;

import com.google.common.base.Strings;
import kz.greetgo.depinject.core.Bean;
import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.education.controller.model.UserInfo;
import kz.greetgo.education.controller.register.UserRegister;
import kz.greetgo.education.stand.register_stand_impl.db.Db;

import java.util.ArrayList;
import java.util.List;

@Bean
public class UserRegisterStandImpl implements UserRegister {

  public BeanGetter<Db> db;

  @Override
  public UserInfo getUserInfo(String personId) {
    UserInfo userInfo = new UserInfo();

    String role = db.get().personRoleMapping.get(personId);

    if(!Strings.isNullOrEmpty(role)){
        userInfo.cans.addAll(db.get().roleFuncMapping.get(role)==null?
            new ArrayList<>():db.get().roleFuncMapping.get(role));
    }

    return userInfo;
  }
}
