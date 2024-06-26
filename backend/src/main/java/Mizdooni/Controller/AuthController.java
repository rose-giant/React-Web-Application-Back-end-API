package Mizdooni.Controller;

import Mizdooni.Model.User.User;
import Mizdooni.Model.User.UserRepository;
import Mizdooni.Model.User.UserViewLogin;
import Mizdooni.Model.User.userView;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

@RestController
@RequestMapping(path= "/",produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthController {
    private static final Logger LOGGER = LoggerFactory.getLogger(AuthController.class);
    @PostMapping("login")
    public User login(HttpServletResponse response,
                      @RequestBody UserViewLogin body) throws Exception {
        UserRepository userRepo = UserRepository.getInstance();
        User user = userRepo.findByUsernameAndPassword(body.getUsername(), body.getPassword());
        if(user == null) {
            LOGGER.error("Login failed for username: " + body.getUsername());
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
        }
        return user;
    }
    @PostMapping("signup")
    public User signup(HttpServletResponse response,
                       @RequestBody userView userView) throws Exception {
        UserRepository userRepository = UserRepository.getInstance();
        User newUser = userView.viewToUser();
        if(userRepository.findUserByUserName(newUser.username) != null){
            LOGGER.error("Login failed for username: " + newUser.getUsername());
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }else {
            userRepository.addUser(newUser);
            response.setStatus(HttpServletResponse.SC_CREATED);
        }
        return newUser;
    }

}
