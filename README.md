## Клиент для системы тестирования

### Возможности
- Регистрация
- Авторизация
- Тесты
- Повтороное прохождение теста
- Показ рекалмы
- Восстановление доступа

### Установка

* Скопируйте .environment.json.dist в  .environment.json
* В .environment.json в поле core->url укажите путь до сервера где находится проект core
* Далее нужно собрать проект

### Сборка проекта
```
# docker-compose build app
# docker-compose run app yarn install
# docker-compose run app ng build --prod
# docker-compose build nginx
```

### Запуск собранного проекта
```
  - docker-compose -f docker-compose.develop.yaml up -d
```
Проект будет доступен по порту 80