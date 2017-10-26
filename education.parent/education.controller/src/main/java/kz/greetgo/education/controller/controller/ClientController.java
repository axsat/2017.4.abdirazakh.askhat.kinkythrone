package kz.greetgo.education.controller.controller;

import kz.greetgo.depinject.core.Bean;
import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.education.controller.model.AdminInfo;
import kz.greetgo.education.controller.model.AuthInfo;
import kz.greetgo.education.controller.model.ClientInfo;
import kz.greetgo.education.controller.register.ClientRegister;
import kz.greetgo.education.controller.utils.Controller;
import kz.greetgo.mvc.annotations.Mapping;
import kz.greetgo.mvc.annotations.ToJson;
import kz.greetgo.mvc.annotations.RequestInput;

import java.util.List;

@Bean
@Mapping("/mycode")
public class ClientController implements Controller{
    public BeanGetter<ClientRegister> clientRegister;

    @ToJson
    @Mapping("/list")
    public List<ClientInfo> getClientList() {
        return clientRegister.get().getClientList();
    }
    @ToJson
    @Mapping("/listAdmin")
    public List<AdminInfo> getAdminList() {
        return clientRegister.get().getAdminList();
    }
    @ToJson
    @Mapping("/delete")
    public String getClientDelete(@RequestInput String json) {
        return clientRegister.get().getClientDelete(json);
    }
    @ToJson
    @Mapping("/add")
    public String getClientAdd(@RequestInput String json) {
        return clientRegister.get().getClientAdd(json);
    }
    @ToJson
    @Mapping("/addAdmin")
    public String getAdminAdd(@RequestInput String json) {
        return clientRegister.get().getAdminAdd(json);
    }
    @ToJson
    @Mapping("/checkWhoLoggedIn")
    public String checkWhoLoggedIn(@RequestInput String json) {
        return clientRegister.get().checkWhoLoggedIn(json);
    }

}
