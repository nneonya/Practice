//Создайте класс «Сотрудник» со свойствами имени и зарплаты. 
//Включите метод расчета годовой зарплаты. 
//Создайте подкласс под названием «Менеджер», 
//который наследуется от класса «Сотрудник» и
//добавляет дополнительное свойство для отдела. 
//Переопределить метод расчета годовой зарплаты, 
//чтобы включить бонусы для менеджеров. 
//Создайте два экземпляра класса «Менеджер» 
//и рассчитайте их годовую зарплату.

class employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    calculateAnnualSalary() {
        return this.salary * 12;
      }
    }
    
    class Manager extends Employee {
      constructor(name, salary, department, bonus) {
        super(name, salary);
        this.department = department;
        this.bonus = bonus;
      }
    
      calculateAnnualSalary() {
        return super.calculateAnnualSalary() + this.bonus;
      }
    }

    const manager1 = new Manager('Alice', 5000, 'Sales', 10000);
    const manager2 = new Manager('Mark', 6000, 'Marketing', 12000);