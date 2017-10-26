package kz.greetgo.education.controller.register;

import kz.greetgo.education.controller.model.AuthInfo;
import kz.greetgo.education.controller.model.ClientInfo;
import kz.greetgo.education.controller.model.AdminInfo;

import java.util.List;
import java.util.Map;

public interface ClientRegister {
    List<ClientInfo> getClientList();
    List<AdminInfo> getAdminList();
    String getClientDelete(String json);
    String getAdminDelete(String json);
    String getClientAdd(String json);
    String getAdminAdd(String json);
    String checkWhoLoggedIn(String json);


}
