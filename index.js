class UserProfileManager {
    constructor() {
      this.users = [];
    }
  
    addUser(userInformation) {
      const id = this.idGenerate();
      this.users.push({ id, ...userInformation });
    }
    
    removeUser(idUser) {
      this.users = this.users.filter(user => user.id !== idUser);
    }

    updateUser(idUser, newInformation) {
      this.users = this.users.map(user => (user.id === idUser ? { ...user, ...newInformation } : user));
    }
    
    findUserByName(name) {
      return this.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    }

    getAllUsers() {
      return this.users;
    }

    idGenerate() {
      return Math.random().toString(36).substr(2, 9);
    }
  }
  
  const profileManager = new UserProfileManager();

  profileManager.addUser({ name: "Alice", email: "alice@example.com" });
  profileManager.addUser({ name: "Bob", email: "bob@example.com" });
  
  console.log(profileManager.getAllUsers()); // Выводит информацию о Alice и Bob
  
  profileManager.updateUser(1, { name: "Alicia" }); // Обновляет имя Alice на Alicia
  profileManager.removeUser(2); // Удаляет Bob
  
  console.log(profileManager.findUserByName("Ali")); // Находит Alicia
