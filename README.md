# KPZ-labs
## Дотримання принципів програмування

### 1. DRY (Don't Repeat Yourself)
Ми винесли спільні поля (`name`, `species`, `age`) у базовий клас `Animal`, що дозволяє уникнути дублювання:
- [Animal.js, рядки 1–6](./lab-1/Animal.js#L1-L6)
- Використовується у всіх похідних класах: `Mammal`, `Bird`, `Reptile`

### 2. KISS (Keep It Simple, Stupid)
Класи мають **мінімум логіки**, все чітко і прямо:
- [Food.js, весь файл](./lab-1/Food.js)
- [Employee.js, весь файл](./lab-1/Employee.js)

### 3. SOLID

#### 3.1. S – Single Responsibility
Кожен клас має **одну відповідальність**:
- `Employee` — зберігає дані про працівника
- `Enclosure` — керує розміщенням тварин
- `Inventory` — генерує звіт

#### 3.2. O – Open/Closed
Можна додати нові види тварин без зміни класу `Animal`:
- [Animal.js](./lab-1/Animal.js)

#### 3.3. L – Liskov Substitution
Можна передавати об'єкти `Mammal`, `Bird` як `Animal`:
- [Enclosure.js, метод `addAnimal`](./lab-1/Enclosure.js#L9)

#### 3.4. I – Interface Segregation
Кожен клас реалізує лише потрібні йому властивості (напр., `canFly` є лише у `Bird`), не змушується реалізовувати зайві.

#### 3.5. D – Dependency Inversion
`Inventory` працює з масивами об'єктів (`enclosures`, `employees`), не залежить від конкретних реалізацій:
- [Inventory.js](./lab-1/Inventory.js)

### 4. YAGNI (You Aren't Gonna Need It)
Не додано функцій, які не потрібні (наприклад `removeAnimal`):
- [Enclosure.js](./lab-1/Enclosure.js)

### 5. Composition Over Inheritance
Об'єкти містять інші об'єкти замість спадкування:
- `Inventory` містить `Enclosure[]` та `Employee[]`
- [main.js](./lab-1/main.js#L28-L32)

### 6. Program to Interfaces, not Implementations
Ми передаємо до `Inventory` масиви об'єктів, які мають необхідну структуру:

### 7. Fail Fast
Enclosure.addAnimal одразу перевіряє перевищення місткості:

[Enclosure.js, рядки 10–14](./lab-1/Enclosure.js#L10-L14)