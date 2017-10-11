  package kz.greetgo.education.controller.register;

import kz.greetgo.education.controller.model.AuthInfo;

public interface AuthRegister {
  AuthInfo getAutoInfo(String accountName, String password);
}
