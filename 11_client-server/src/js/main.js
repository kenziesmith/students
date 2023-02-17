(async function () {
  // список студентов
  let studentsList = [
    // {
    //   name: "Вероника",
    //   surname: "Николаева",
    //   lastname: "Глебовна",
    //   birthday: new Date("09 02 2002"),
    //   studyStart: 2020,
    //   faculty: "Физика",
    // },
    // {
    //   name: "Ева",
    //   surname: "Озерова",
    //   lastname: "Александровна",
    //   birthday: new Date("02 17 1998"),
    //   studyStart: 2020,
    //   faculty: "Психология",
    // },
    // {
    //   name: "Марк",
    //   surname: "Гуляев",
    //   lastname: "Денисович",
    //   birthday: new Date("02 26 2000"),
    //   studyStart: 2019,
    //   faculty: "Астрономия",
    // },
    // {
    //   name: "Фёдор",
    //   surname: "Болдырев",
    //   lastname: "Артурович",
    //   birthday: new Date("08 11 1999"),
    //   studyStart: 2017,
    //   faculty: "Экономика",
    // },
    // {
    //   name: "Константин",
    //   surname: "Морозов",
    //   lastname: "Маркович",
    //   birthday: new Date("11 22 2000"),
    //   studyStart: 2021,
    //   faculty: "Социология",
    // },
    // {
    //   name: "Роман",
    //   surname: "Алексеев",
    //   lastname: "Денисович",
    //   birthday: new Date("07 21 2002"),
    //   studyStart: 2019,
    //   faculty: "История",
    // },
    // {
    //   name: "Ева",
    //   surname: "Котова",
    //   lastname: "Владиславовна",
    //   birthday: new Date("06 01 1998"),
    //   studyStart: 2016,
    //   faculty: "Журналистика",
    // },
    // {
    //   name: "Полина",
    //   surname: "Воронина",
    //   lastname: "Григорьевна",
    //   birthday: new Date("04 11 2003"),
    //   studyStart: 2023,
    //   faculty: "Политология",
    // },
    // {
    //   name: "Анна",
    //   surname: "Константинова",
    //   lastname: "Романовна",
    //   birthday: new Date("06 14 1999"),
    //   studyStart: 2022,
    //   faculty: "Философия",
    // },
    // {
    //   name: "Анастасия",
    //   surname: "Львова",
    //   lastname: "Максимовна",
    //   birthday: new Date("09 29 1997"),
    //   studyStart: 2015,
    //   faculty: "История",
    // },
  ];

  let currentSort = "FIO"; // хранит данные о последней сортировке

  // создаем форму с полями ввода
  function createForm() {
    const form = document.createElement("form"); // форма добавления студента

    const formInputWrapper = document.createElement("div"); // обертка для инпутов

    const formInpName = document.createElement("input"); // ввод имени
    const formInpSurname = document.createElement("input"); // ввод фамилии
    const formInpLastname = document.createElement("input"); // ввод отчества
    const formInpbirthday = document.createElement("input"); // дата рождения
    const formInpstudyStart = document.createElement("input"); // год обучения
    const formInpFaculty = document.createElement("input"); // факультет

    const formBtnWrapper = document.createElement("div"); // обретка для кнопки
    const inputErrorMessage = document.createElement("p"); // сообщение об ошибке
    const formBtn = document.createElement("button"); // кнопка

    // классы и стили
    form.className = "form";
    formInputWrapper.className = "mb-3";
    formInputWrapper.style.display = "flex";
    formInputWrapper.style.flexDirection = "column";
    formBtnWrapper.className = "btn-wrapper";
    inputErrorMessage.className = "mb-2 mt-2 input-message input-error";
    formBtn.className = "btn btn-success";

    // атрибуты type
    formInpName.type = "text";
    formInpSurname.type = "text";
    formInpLastname.type = "text";
    formInpbirthday.type = "date";
    formInpstudyStart.type = "number";
    formInpFaculty.type = "text";
    formBtn.type = "submit";

    formInpName.className = "input-filed";
    formInpSurname.className = "input-filed";
    formInpLastname.className = "input-filed";
    formInpbirthday.className = "input-filed";
    formInpstudyStart.className = "input-filed";
    formInpFaculty.className = "input-filed";

    // основные атрибуты
    formInpName.placeholder = "Имя студента*";
    formInpSurname.placeholder = "Фамилия студента*";
    formInpLastname.placeholder = "Отчество студента*";
    formInpstudyStart.placeholder = "Год начала обучения*";
    formInpFaculty.placeholder = "Факультет*";
    formBtn.textContent = "Добавить студента";

    // готовые значения (для теста)
    formInpName.value = "Константин";
    formInpSurname.value = "Лебедев";
    formInpLastname.value = "Алексеевич";
    formInpbirthday.valueAsDate = new Date("2003-12-25");
    formInpstudyStart.value = "2021";
    formInpFaculty.value = "Химия";

    formBtnWrapper.append(inputErrorMessage, formBtn);

    formInputWrapper.append(
      formInpName,
      formInpSurname,
      formInpLastname,
      formInpbirthday,
      formInpstudyStart,
      formInpFaculty
    );

    form.append(formInputWrapper, formBtnWrapper);

    return {
      form,
      formInpName,
      formInpSurname,
      formInpLastname,
      formInpbirthday,
      formInpstudyStart,
      formInpFaculty,
      inputErrorMessage,
      formInputWrapper,
    };
  }

  function createFormFilter() {
    const formFilter = document.createElement("form"); // форма с фильтрами

    const formFilterInpFIO = document.createElement("input");
    const formFilterInpFaculty = document.createElement("input");
    const formFilterInpstudyStart = document.createElement("input");
    const formFilterInpEndOfStudies = document.createElement("input");

    formFilterInpFIO.className = "inp-filter-fio";
    formFilterInpFaculty.className = "inp-filter-faculity";
    formFilterInpstudyStart.className = "inp-filter-star-of-studies";
    formFilterInpEndOfStudies.placeholder = "inp-filter-end-of-studies";

    formFilterInpFIO.placeholder = "Поиск по Ф.И.О";
    formFilterInpFaculty.placeholder = "По факультету";
    formFilterInpstudyStart.placeholder = "По году начала обучения";
    formFilterInpEndOfStudies.placeholder = "По году окончания обучения";

    formFilter.className = "form form-filter";
    formFilter.style.marginLeft = "50px";
    formFilter.style.marginTop = "auto";

    formFilterInpFIO.className = "input-filed";
    formFilterInpFaculty.className = "input-filed";
    formFilterInpstudyStart.className = "input-filed";
    formFilterInpEndOfStudies.className = "input-filed";

    formFilter.append(
      formFilterInpFIO,
      formFilterInpFaculty,
      formFilterInpstudyStart,
      formFilterInpEndOfStudies
    );

    return {
      formFilter,
      formFilterInpFIO,
      formFilterInpFaculty,
      formFilterInpstudyStart,
      formFilterInpEndOfStudies,
    };
  }

  // создаем основные элементы таблицы
  function createTable() {
    const table = document.createElement("table"); // сама таблицы
    table.className = "table table-dark table-striped"; // bootstrap стили

    const tableHead = document.createElement("thead"); // шапка таблицы
    const tableBody = document.createElement("tbody"); // тело таблицы

    const tableHeadRow = document.createElement("tr");

    const tableHeadCellFIO = document.createElement("th");
    const tableHeadCellFaculty = document.createElement("th");
    const tableHeadCellbirthday = document.createElement("th");
    const tableHeadCellYearOfStudy = document.createElement("th");

    tableHeadCellFIO.textContent = "Ф.И.О. студента";
    tableHeadCellFaculty.textContent = "Факультет";
    tableHeadCellbirthday.textContent = "Дата рождения";
    tableHeadCellYearOfStudy.textContent = "Год обучения";

    tableHeadRow.append(
      tableHeadCellFIO,
      tableHeadCellFaculty,
      tableHeadCellbirthday,
      tableHeadCellYearOfStudy
    );

    tableHead.append(tableHeadRow);

    table.append(tableHead, tableBody);

    return {
      table,
      tableBody,
      tableHeadCellFIO,
      tableHeadCellFaculty,
      tableHeadCellbirthday,
      tableHeadCellYearOfStudy,
    };
  }

  // возвращает возраст студента (принимает дату рождения в виде строки)
  function getAge(dateString) {
    let day = parseInt(dateString.substring(0, 2));
    let month = parseInt(dateString.substring(3, 5));
    let year = parseInt(dateString.substring(6, 10));

    let today = new Date();
    let birthDate = new Date(year, month - 1, day); // 'month - 1' т.к. нумерация месяцев начинается с 0
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  function getDateBirth(studentObj) {
    let today = new Date().getFullYear();
    let dateBirth = new Date(studentObj.birthday);

    let birthdayDate = dateBirth.getDate();
    let birthdayMonth = dateBirth.getMonth() + 1;

    if (birthdayDate < 10) {
      birthdayDate = `0${dateBirth.getDate()}`;
    }

    // + 1 т.к месяц начинается с 0
    if (birthdayMonth < 10) {
      birthdayMonth = `0${dateBirth.getMonth() + 1}`;
    }

    let result =
      birthdayDate + "." + birthdayMonth + "." + dateBirth.getFullYear();
    return result;
  }

  // функция добавляет студента в "БД" (принимает объект)
  async function addStudent(studentObject) {
    const response = await fetch("http://localhost:3000/api/students", {
      method: "POST",
      body: JSON.stringify(studentObject),
      headers: { "Content-Type": "application:json" },
    });

    const data = await response.json();
  }

  // функция удаляет студента
  async function deleteStudent(studentId) {
    const resposne = await fetch(
      `http://localhost:3000/api/students/${studentId}`,
      {
        method: "DELETE",
      }
    );
    return resposne;
  }

  // генерирует строку с новым студентом
  function createStudentRow(student) {
    const now = new Date();

    const studentRow = document.createElement("tr");
    studentRow.className = "student-row";

    const studentCellFIO = document.createElement("td");
    const studentCellfaculty = document.createElement("td");
    const studentCellbirthday = document.createElement("td");
    const studentCellstudyStart = document.createElement("td");

    studentCellFIO.innerText = student.FIO;
    studentCellfaculty.innerText = student.faculty;

    // значение даты из массива переводим в необходимый для отображения формат
    studentCellbirthday.innerHTML = `${getDateBirth(student)} (${getAge(
      getDateBirth(student)
    )})`;

    const educationEndDate = new Date(parseInt(student.studyStart) + 4, 8, 1); // дата, когда студент окончил обучение

    let educationStatus = new Date(educationEndDate - now).getFullYear() - 1970;

    educationStatus = educationStatus < 0 ? "закончил/а" : 4 - educationStatus;

    educationStatus = educationStatus <= 0 ? "не начал/а" : educationStatus;

    studentCellstudyStart.innerText = `${
      student.studyStart
    }-${educationEndDate.getFullYear()} (${educationStatus} курс)`;

    studentRow.append(
      studentCellFIO,
      studentCellfaculty,
      studentCellbirthday,
      studentCellstudyStart
    );

    studentRow.addEventListener("click", async () => {
      if (
        confirm(`Вы действительно хотите удалить студента "${student.name}"`)
      ) {
        clearInputsFiled(); // очистим поля ввода
        await deleteStudent(student.id);
        renderTableBody(await getStudentsList());
      }
    });

    return studentRow;
  }

  async function getStudentsList() {
    const response = await fetch("http://localhost:3000/api/students");
    return response.json();
  }

  // отрисовка тела таблицы студентов
  function renderTableBody(array, formFilter) {
    const tbody = document.querySelector("tbody"); // получим наш tbody

    tbody.innerHTML = ""; // очищаем все содержимое таблицы

    let copyArray = [...array];

    // запишем свойство FIO для более удобной работы с копией
    for (const student of copyArray) {
      student.FIO = `${student.name} ${student.surname} ${student.lastname}`;
      student.endOfStudies = Number(student.studyStart) + 4;
    }

    // сортируем
    copyArray = copyArray.sort((a, b) => {
      if (currentSort == "birthday") {
        return a[currentSort] < b[currentSort] ? 1 : -1;
      } else {
        return a[currentSort] > b[currentSort] ? 1 : -1;
      }
    });

    // фильтруем
    if (formFilter) {
      if (formFilter.formFilterInpFIO.value.trim() !== "") {
        copyArray = copyArray.filter((student) => {
          if (
            student.FIO.toLowerCase().includes(
              formFilter.formFilterInpFIO.value.trim().toLowerCase()
            )
          ) {
            return true;
          }
        });
      }

      if (formFilter.formFilterInpFaculty.value.trim() !== "") {
        copyArray = copyArray.filter((student) => {
          if (
            student.faculty
              .toLowerCase()
              .includes(
                formFilter.formFilterInpFaculty.value.trim().toLowerCase()
              )
          ) {
            return true;
          }
        });
      }

      if (formFilter.formFilterInpstudyStart.value.trim() !== "") {
        copyArray = copyArray.filter((student) => {
          if (
            String(student.studyStart).includes(
              formFilter.formFilterInpstudyStart.value.trim()
            )
          ) {
            return true;
          }
        });
      }

      if (formFilter.formFilterInpEndOfStudies.value.trim() !== "") {
        copyArray = copyArray.filter((student) => {
          if (
            String(student.endOfStudies).includes(
              formFilter.formFilterInpEndOfStudies.value.trim()
            )
          ) {
            return true;
          }
        });
      }
    }

    // отрисовываем строки с информацией
    for (const student of copyArray) {
      tbody.append(createStudentRow(student));
    }
  }

  // валидация формы
  function formValidation(
    formInpName,
    formInpSurname,
    formInpLastname,
    formInpbirthday,
    formInpstudyStart,
    formInpFaculty,
    inputErrorMessage
  ) {
    let result = false;

    if (
      formInpName.value.trim() != "" &&
      formInpSurname.value.trim() != "" &&
      formInpLastname.value.trim() != "" &&
      formInpstudyStart.value.trim() != "" &&
      formInpFaculty.value.trim() != ""
    ) {
      if (formInpName.value.length >= 2 && formInpName.value.length < 17) {
        if (
          formInpSurname.value.length >= 2 &&
          formInpSurname.value.length < 17
        ) {
          if (
            formInpLastname.value.length >= 2 &&
            formInpLastname.value.length < 17
          ) {
            if (
              formInpbirthday.valueAsDate != null &&
              formInpbirthday.valueAsDate >= new Date("1900-01-01") &&
              formInpbirthday.valueAsDate <= new Date()
            ) {
              if (
                formInpstudyStart.value >= 2000 &&
                formInpstudyStart.value <= new Date().getFullYear()
              ) {
                result = true; // если проверки пройдены, result = true
              } else if (formInpstudyStart.value < 2000) {
                inputErrorMessage.innerHTML =
                  "Дата начала обучение не может быть раньше 2000-го года!";
              } else if (formInpstudyStart.value > new Date().getFullYear()) {
                inputErrorMessage.innerHTML =
                  "Дата начала обучение не может быть позднее текущего года!";
              }
            } else if (formInpbirthday.valueAsDate > new Date()) {
              inputErrorMessage.innerHTML =
                "Ошибка! Укажите дату рождения не позднее текущей даты!";
            } else if (formInpbirthday.valueAsDate < new Date("1900-01-01")) {
              inputErrorMessage.innerHTML =
                "Ошибка! Укажите дату рождения не ранее 01.01.1900";
            } else {
              inputErrorMessage.innerHTML =
                "Ошибка! Укажите корректную дату рождения!";
            }
          } else if (formInpLastname.value.length > 17) {
            inputErrorMessage.innerHTML = "Ошибка! Отчество слишком длинное!";
          } else {
            inputErrorMessage.innerHTML = "Ошибка! Отчество слишком короткое!";
          }
        } else if (formInpSurname.value.length > 17) {
          inputErrorMessage.innerHTML = "Ошибка! Фимилия слишком длинная!";
        } else {
          inputErrorMessage.innerHTML = "Ошибка! Фимилия слишком короткая!";
        }
      } else if (formInpName.value.length > 17) {
        inputErrorMessage.innerHTML = "Ошибка! Имя слишком длинное!";
      } else {
        inputErrorMessage.innerHTML = "Ошибка! Имя слишком короткое!";
      }
    } else {
      inputErrorMessage.innerHTML =
        "Ошибка! Пожалуйста, заполните все поля отмеченные звездочкой (*)";
    }

    return result;
  }

  // функция очищает поля ввода
  function clearInputsFiled() {
    const form = document.querySelector(".form"); // форма
    const filterForm = document.querySelector(".form-filter"); // форма с фильтрами

    for (const input of form.querySelectorAll("input")) {
      input.value = "";
    }

    for (const input of filterForm.querySelectorAll("input")) {
      input.value = "";
    }
  }

  const app = document.getElementById("app"); // тег app
  const formGroup = document.createElement("div"); // обёртка для форм
  formGroup.style.display = "flex";

  const appForm = createForm(); // форма
  const appFormFilter = createFormFilter(); // форма с фильтрами

  const appTable = createTable(); // таблица

  formGroup.append(appForm.form, appFormFilter.formFilter);
  app.append(formGroup, appTable.table); // добавим форму и таблицу

  // отправка формы
  appForm.form.addEventListener("submit", async (event) => {
    event.preventDefault(); // хз че это

    // если валидация пройдена (в функцию formValidation передаем поля ввода)
    if (
      formValidation(
        appForm.formInpName,
        appForm.formInpSurname,
        appForm.formInpLastname,
        appForm.formInpbirthday,
        appForm.formInpstudyStart,
        appForm.formInpFaculty,
        appForm.inputErrorMessage
      )
    ) {
      // тест
      console.log("Validation Passed!");

      // убираем сообщение об ошибке
      appForm.inputErrorMessage.textContent = "";

      // создадим студента в виде объекта
      student = {
        name: appForm.formInpName.value.trim(),
        surname: appForm.formInpSurname.value.trim(),
        lastname: appForm.formInpLastname.value.trim(),
        birthday: new Date(appForm.formInpbirthday.valueAsDate),
        studyStart: appForm.formInpstudyStart.value.trim(),
        faculty: appForm.formInpFaculty.value.trim(),
      };

      // запишем студента в "БД"
      await addStudent(student);

      // очищаем поля ввода
      clearInputsFiled();

      studentsList = await getStudentsList();
      renderTableBody(studentsList); // вызываем функцию отрисовки tableBody
    }
  });

  appFormFilter.formFilter.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  // обработка событий на колонках для сортировки
  appTable.tableHeadCellFIO.addEventListener("click", async () => {
    currentSort = "FIO";
    renderTableBody(await getStudentsList(), appFormFilter);
  });

  appTable.tableHeadCellFaculty.addEventListener("click", async () => {
    currentSort = "faculty";
    renderTableBody(await getStudentsList(), appFormFilter);
  });

  appTable.tableHeadCellbirthday.addEventListener("click", async () => {
    currentSort = "birthday";
    renderTableBody(await getStudentsList(), appFormFilter);
  });

  appTable.tableHeadCellYearOfStudy.addEventListener("click", async () => {
    currentSort = "studyStart";
    renderTableBody(await getStudentsList(), appFormFilter);
  });

  // обработка событий для фильтров
  appFormFilter.formFilterInpFIO.addEventListener("input", async () => {
    renderTableBody(await getStudentsList(), appFormFilter);
  });

  appFormFilter.formFilterInpFaculty.addEventListener("input", async () => {
    renderTableBody(await getStudentsList(), appFormFilter);
  });

  appFormFilter.formFilterInpstudyStart.addEventListener("input", async () => {
    renderTableBody(await getStudentsList(), appFormFilter);
  });

  appFormFilter.formFilterInpEndOfStudies.addEventListener(
    "input",
    async () => {
      renderTableBody(await getStudentsList(), appFormFilter);
    }
  );

  studentsList = await getStudentsList();
  renderTableBody(studentsList); // вызываем функцию отрисовки tableBody
})();
