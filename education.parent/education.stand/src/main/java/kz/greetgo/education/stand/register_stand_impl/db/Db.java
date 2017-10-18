package kz.greetgo.education.stand.register_stand_impl.db;

import kz.greetgo.depinject.core.Bean;
import kz.greetgo.depinject.core.HasAfterInject;
import kz.greetgo.education.stand.register_stand_impl.model.ClientDot;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Bean
public class Db implements HasAfterInject{
  public final Map<String, ClientDot> clientStorage = new HashMap<>();
  @Override
  public void afterInject() throws Exception {
    prepareData();
  }

  private void prepareData() {
    clientStorage.put("1",new ClientDot("1","Anatoliy","Zigangirov","02/04/1996","+77781669223","zig.zak.1996@gmail.com","SDU"));
    clientStorage.put("2",new ClientDot("2","Kamalkhan","Artykbayev","19/10/1996","+77777777777","kamalkhan.sdu@gmail.com","SDU"));
  }
}
