package kz.greetgo.education.controller.model;

public class AdminInfo {
    private String id;
    private String username;
    private String name;//optional
    private String surname;//optional
    private String birthDate;//optional
    private String telephone;//optional
    private String email;
    private String address;//optional
    private String password;
    private int[] works;//zero At First
    private int numberOfWorks;
    private String mainGenre;//optional
    private String avatar;//optional
    public AdminInfo(String id, String username, String name, String surname, String birthDate, String telephone, String email
            , String address, String password, String mainGenre, String avatar){
        this.id = id;
        this.username=username;
        this.birthDate = birthDate;
        this.name = name;
        this.surname = surname;
        this.telephone = telephone;
        this.email = email;
        this.address = address;
        this.password=password;
        this.mainGenre=mainGenre;
        if(avatar=="") this.avatar="https://pp.userapi.com/c639531/v639531869/17738a/xoN1yZsKvyc.jpg";
        else this.avatar=avatar;
        this.works=new int[500];
        this.numberOfWorks=0;
    }

    public String getAvatar(){return avatar;}

    public String getUsername(){ return username; }

    public String getMainGenre() { return mainGenre; }

    public String getPassword() { return password; }

    @Override
    public String toString() { return "id-"+id+" : "+username+" : "+email; }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setUsername(String username) { this.username = username; }

    public void setPassword(String  password){this.password = password;}

    public void setMaingenre(String mainGenre){this.mainGenre=mainGenre;}

    public void setAvatar(String avatar){this.avatar=avatar;}

    public void addWork(String workId){
        int tempId=Integer.parseInt(workId);//simultaneous sort adding. Don't know why did I do that
        for(int i=numberOfWorks-1;i>=0;i--){
            if(works[i]<tempId){
                for(int j=numberOfWorks;j>i;j--){
                    works[j]=works[j-1];
                }
                works[i]=tempId;
            }
            else if(i==0)
                for(int j=numberOfWorks;j>0;j--){
                    works[j]=works[j-1];
                }
            works[0]=tempId;
        }
    }

    public String getWorksString(){
        String tempWorks="No Works Yet";
        if(numberOfWorks!=0) tempWorks=""+works[0];
        for (int i=1;i<numberOfWorks;i++)
            tempWorks+="; "+works[i];
        return tempWorks;
    }

    public int[] getWorks(){
        int[] tempWorks=new int[numberOfWorks];
        for(int i=0;i<numberOfWorks;i++)
            tempWorks[i]=works[i];
        return tempWorks;
    }
}

