package kz.greetgo.education.controller.controller;

import kz.greetgo.depinject.core.Bean;
import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.education.controller.model.DictionaryInfo;
import kz.greetgo.education.controller.model.DictionaryListDetails;
import kz.greetgo.education.controller.register.DictionaryRegister;
import kz.greetgo.education.controller.utils.Controller;
import kz.greetgo.mvc.annotations.Mapping;
import kz.greetgo.mvc.annotations.ToJson;

@Bean
@Mapping("/dictionary")
public class DictionaryController implements Controller{

    public BeanGetter<DictionaryRegister> dictionaryRegister;

    @ToJson
    @Mapping("/list")
    public DictionaryListDetails getList(){
        return dictionaryRegister.get().getDictionaryListDetails();
    }
}
