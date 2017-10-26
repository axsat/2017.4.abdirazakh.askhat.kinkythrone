package kz.greetgo.education.stand.register_stand_impl.model;

public class AuthStand {
    public String role;
    public String tokenId;
    public boolean check;
    public AuthStand(){}

    public AuthStand(String role, String tokenId, boolean check) {
        this.role = role;
        this.tokenId = tokenId;
        this.check = check;
    }
}
