package kz.greetgo.education.stand.register_stand_impl;

import kz.greetgo.depinject.core.Bean;
import kz.greetgo.depinject.core.BeanGetter;
import kz.greetgo.education.controller.model.AuthInfo;
import kz.greetgo.education.controller.model.ClientInfo;
import kz.greetgo.education.controller.model.AdminInfo;
import kz.greetgo.education.controller.register.ClientRegister;
import kz.greetgo.education.stand.register_stand_impl.db.Db;
import kz.greetgo.education.stand.register_stand_impl.model.Administrator;
import kz.greetgo.education.stand.register_stand_impl.model.AuthStand;
import kz.greetgo.education.stand.register_stand_impl.model.Author;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

@Bean
public class ClientRegisterStandImpl implements ClientRegister {
    public BeanGetter<Db> db;

    @Override
    public List<ClientInfo> getClientList() {
        List<ClientInfo> clientInfo = new ArrayList<ClientInfo>();
        for(Author author : db.get().clientStorage.values()){
            ClientInfo ci = new ClientInfo(author.getId(), author.getUsername(), author.getName(), author.getSurname(), author.getBirthDate(), author.getTelephone(), author.getEmail()
                    , author.getAddress(),author.getPassword(),author.getMainGenre(),author.getAvatar());
            clientInfo.add(ci);
        }
        return clientInfo;
    }

    @Override
    public List<AdminInfo> getAdminList() {
        List<AdminInfo> adminInfo = new ArrayList<AdminInfo>();
        for(Administrator administrator : db.get().adminStorage.values()){
            AdminInfo ci = new AdminInfo(administrator.getId(), administrator.getUsername(), administrator.getName(), administrator.getSurname(), administrator.getBirthDate(), administrator.getTelephone(), administrator.getEmail()
                    , administrator.getAddress(),administrator.getPassword(),administrator.getMainGenre(),administrator.getAvatar());
            adminInfo.add(ci);
        }
        return adminInfo;
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
    public String getAdminDelete(String json) {
        JSONObject obj = new JSONObject(json);
        String id = obj.getString("id");
        System.out.println(id);
        db.get().adminStorage.remove(id);
        return "Ok delete Admin";
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
        String avatar = obj.getString("avatar");

        System.out.print(id);
        if(id.length()==0) {
            Random random =new Random();
            long a=random.nextLong();
            db.get().clientStorage.put(""+a,new Author(""+a,username,name,surname,birthDate,telephone,email,address,password,mainGenre,avatar));
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
            ci.setAvatar(avatar);
            db.get().clientStorage.put(id,ci);
            return "Ok update";
        }
    }

    @Override
    public String getAdminAdd(String json) {
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
        String avatar = obj.getString("avatar");

        System.out.print(id);
        if(id.length()==0) {
            Random random =new Random();
            long a=random.nextLong();
            db.get().adminStorage.put(""+a,new Administrator(""+a,username,name,surname,birthDate,telephone,email,address,password,mainGenre,avatar));
            return "Ok insert Admin";
        }
        else{
            Administrator ci = db.get().adminStorage.get(id);
            ci.setAddress(address);
            ci.setPassword(password);
            ci.setUsername(username);
            ci.setMainGenre(mainGenre);
            ci.setEmail(email);
            ci.setTelephone(telephone);
            ci.setBirthDate(birthDate);
            ci.setName(name);
            ci.setSurname(surname);
            ci.setAvatar(avatar);
            db.get().adminStorage.put(id,ci);
            return "Ok update";
        }
    }


    @Override
    public String checkWhoLoggedIn(String json) {
        System.out.println(json);
        JSONObject obj = new JSONObject(json);
        String username = obj.getString("username");
        String email = obj.getString("email");
        String password =obj.getString("password");

        for (String id : db.get().adminStorage.keySet()) {
            Administrator cl = db.get().adminStorage.get(id);
            if(cl.getEmail().equals(email) && cl.getPassword().equals(password)){
                String uuid = UUID.randomUUID().toString();
                return "found,admin,"+uuid+","+cl.toString();
            }
        }
        for (String id : db.get().clientStorage.keySet()) {
            Author cl = db.get().clientStorage.get(id);
            if(cl.getEmail().equals(email) && cl.getPassword().equals(password)){
                String uuid = UUID.randomUUID().toString();
                return "found,author,"+uuid+","+cl.toString();
            }
        }
//
        String auth = "not,0";
        System.out.println(auth);
        return auth;

    }
}
