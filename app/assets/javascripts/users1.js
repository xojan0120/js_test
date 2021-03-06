// JavaScriptにはグローバルスコープとローカルスコープの2種類がある。
// まず、スコープとは「範囲」である。
//
// グローバルスコープとは、「そこに置いたものは、どこからでも呼び出せるようになる」範囲である。
// 関数の外側で定義された変数や関数が、このグローバルスコープに所属することになる。
// グローバルスコープで定義された変数や関数は、どこからでも上書きしたり、呼び出すことができる。
//
// ローカルスコープとは、「そこに置いたものは、その場所でしか呼び出せない」範囲である。
// 関数の内側で定義された変数や関数が、このローカルスコープに所属することになる。
// ローカルスコープで定義された変数や関数は、関数の内側以外では、上書きしたり、呼び出すことはできない。

//var var_users1a = "これはusers1.jsのvar_users1の変数です。";
//
//function func_users1 () {
//  alert("users1.jsのfunc_users1()を呼び出しました");
//  var var_users1b = "これはusers1.jsのfunc_users1関数の中のvar_users1bの変数です。"
//  var_users1c = "これはusers1.jsのfunc_users1関数の中のvar_users1cの変数です。"
//}
