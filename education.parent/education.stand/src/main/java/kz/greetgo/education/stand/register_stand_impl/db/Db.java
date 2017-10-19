package kz.greetgo.education.stand.register_stand_impl.db;

import kz.greetgo.depinject.core.Bean;
import kz.greetgo.depinject.core.HasAfterInject;
import kz.greetgo.education.stand.register_stand_impl.model.Author;


import java.util.HashMap;
import java.util.Map;

@Bean
public class Db implements HasAfterInject{
  public final Map<String, Author> clientStorage = new HashMap<>();
  @Override
  public void afterInject() throws Exception {
    prepareData();
  }

  private void prepareData() {
    clientStorage.put("1",new Author("1","asxa","Askhat","Abdirazakh","01/09/1997","+77713860735","abdirazaxm@gmail.com","SDU","psychoBoyJack","Character Drawing","https://pp.userapi.com/c639729/v639729800/42d47/WakM6Igwf1w.jpg"));
    clientStorage.put("2",new Author("2","iHaveFather","Luke","Skywalker","05/05/1991","+77051234567","140103008@stu.sdu.edu.kz","SDU","mySister","Animu","https://pp.userapi.com/c639426/v639426869/4aa49/pxBAr9QnU10.jpg"));
  }
}
