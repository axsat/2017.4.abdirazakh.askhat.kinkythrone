package kz.greetgo.education.stand.register_stand_impl;

import kz.greetgo.depinject.core.Bean;
import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.education.controller.model.ClientInfo;
import kz.greetgo.education.controller.register.ClientRegister;
import kz.greetgo.education.stand.register_stand_impl.db.Db;
import kz.greetgo.education.stand.register_stand_impl.model.Author;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Bean
public class ClientRegisterStandImpl implements ClientRegister {
    public BeanGetter<Db> db;

    @Override
    public List<ClientInfo> getClientList() {
        List<ClientInfo> clientInfo = new ArrayList<ClientInfo>();
        for(Author author : db.get().clientStorage.values()){
            ClientInfo ci = new ClientInfo(author.getId(), author.getUsername(), author.getName(), author.getSurname(), author.getBirthDate(), author.getTelephone(), author.getEmail()
                    , author.getAddress(),author.getPassword(),author.getMainGenre());
            clientInfo.add(ci);
        }
        return clientInfo;
    }


    @Override
    public String getClientDelete(String json) {
        JSONObject obj = new JSONObject(json);
        String id = obj.getString("id");
        System.out.println(id);
        db.get().clientStorage.remove(id);
        return "Ok delete";
    }

    @Override
    public String getClientAdd(String json) {
        System.out.println(json);
        JSONObject obj = new JSONObject(json);
        String id = obj.getString("id");
        String username = obj.getString("username");
        String name = obj.getString("name");
        String surname = obj.getString("surname");
        String birthDate = obj.getString("birthDate");
        String telephone = obj.getString("telephone");
        String email = obj.getString("email");
        String address = obj.getString("address");
        String password =obj.getString("password");
        String mainGenre = obj.getString("mainGenre");

        System.out.print(id);
        if(id.length()==0) {
            Random random =new Random();
            long a=random.nextLong();
            db.get().clientStorage.put(""+a,new Author(""+a,username,name,surname,birthDate,telephone,email,address,password,mainGenre));
            return "Ok insert";
        }
        else{
            Author ci = db.get().clientStorage.get(id);
            ci.setAddress(address);
            ci.setPassword(password);
            ci.setUsername(username);
            ci.setMainGenre(mainGenre);
            ci.setEmail(email);
            ci.setTelephone(telephone);
            ci.setBirthDate(birthDate);
            ci.setName(name);
            ci.setSurname(surname);
            db.get().clientStorage.put(id,ci);
            return "Ok update";
        }
    }
}
