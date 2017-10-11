package kz.greetgo.education.controller.register;

import kz.greetgo.education.controller.model.ClientInfo;
import kz.greetgo.education.controller.model.ClientListDetails;

public interface ClientRegister {
  ClientListDetails getClientList();

  ClientInfo getClientInfo(String clientId);

  ClientInfo saveClientInfo(ClientInfo clientInfo);

  Void deleteClientInfo(String clientId);
}
