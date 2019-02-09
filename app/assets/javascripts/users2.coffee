# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

# CoffeeScriptによりusers2.coffeeの中身の変数や関数は、
# 1つの関数(即時関数)として括られるため、ローカルスコープとなる。
# ローカススコープは、users2.coffee外のファイルから上書きしたり、呼び出すことはできない。
var_users2a = "これはusers2.coffeeのvar_users2aの変数です。"

func_users2a = ->
  alert "users2.coffeeのfunc_users2a()を呼び出しました。"


class window.Users2
  var_users2b: "これはusers2.coffeeのvar_users2の変数です"

  func_users2b: ->
    alert "users2.coffeeのfunc_users2()を呼び出しました"

