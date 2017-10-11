package kz.greetgo.education.stand.register_stand_impl;

import kz.greetgo.depinject.core.Bean;
import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.education.controller.errors.RestError;
import kz.greetgo.education.controller.model.AuthInfo;
import kz.greetgo.education.controller.register.AuthRegister;
import kz.greetgo.education.stand.register_stand_impl.db.Db;
import kz.greetgo.education.stand.register_stand_impl.model.PersonDot;

@Bean
public class AuthRegisterStandImpl implements AuthRegister {

  public BeanGetter<Db> db;

  @Override
  public AuthInfo getAutoInfo(String accountName, String password) {{
    if (!"111".equals(password)) {
      throw new RestError(470, "Пароль 111");
    }

    AuthInfo ret=new AuthInfo();

    StringBuilder err = new StringBuilder();
    err.append("Use one of: ");

    for (PersonDot personDot : db.get().personStorage.values()) {
      if (!personDot.disabled) err.append(personDot.accountName).append(", ");
      if (accountName == null) continue;
      if (accountName.equals(personDot.accountName)) {
        if (personDot.disabled) throw new RestError(470, "Account " + accountName + " is disabled");
        ret.token="token:personId=" + personDot.id;
        ret.personId=personDot.id;
        return ret;
      }
    }

    err.setLength(err.length() - 2);

    throw new RestError(470, err.toString());
  }
  }
}
