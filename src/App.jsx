import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";

function App() {
  const [title, setTitle] = useState("");
  const [contents, setContentse] = useState("");

  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      contents: "내용2",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목3",
      contents: "내용3",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목4",
      contents: "내용4",
      isDone: false,
    },
  ]);

  const todoList = todos.filter(function (todo) {
    return todo.isDone === false;
  }); // 할 일 목록
  const doneList = todos.filter(function (todo) {
    return todo.isDone === true;
  }); // 완료 목록

  // if문을 사용해 title과 contents가 빈 값이랑 같을 때 alert창이 뜬다.
  // 입력해달라는 메세지는 총 3가지로 나눔
  const HandleAddbutton = (event) => {
    event.preventDefault();

    if (title === "" && contents === "") {
      alert("제목과 내용을 입력해주세요");
    } else if (title === "") {
      alert("제목을 입력해주세요");
    } else if (contents === "") {
      alert("내용을 입력해주세요");
    }
  };

  return (
    <div className="todo">
      <div>
        <header
          style={{
            backgroundColor: "#ffd6f3",
            padding: "12px",
            height: "46px",
            fontSize: "28px",
            margin: "6px",
            textAlign: "center",
          }}
        >
          My To Do List✨
        </header>
      </div>
      <div>
        <main
          style={{
            maxWidth: "1200px",
            minwidth: "800px",
            height: "600px",
            margin: "60px auto",
            borderRadius: "10px",
            padding: "0px 24px",
          }}
        >
          <div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const newTodo = {
                  id: uuid(),
                  title: title,
                  contents: contents,
                  isDone: false,
                };

                setTodos([...todos, newTodo]);
              }}
            >
              제목
              <input
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
              내용
              <input
                value={contents}
                onChange={(event) => {
                  setContentse(event.target.value);
                }}
              />
              <button
                className="btn"
                type="submit"
                onClick={() => HandleAddbutton}
              >
                추가하기
              </button>
            </form>
          </div>
          <div>
            {/* <h1>list영역</h1> */}

            <div>
              <h2
                style={{
                  display: "blocr",
                  fontSize: "1.5em",
                  marginblocrstart: "0.83em",
                  marginblocrend: "0.83em",
                  margininlinestart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                Working.. 🔥
              </h2>
              {todoList.map(function (todo) {
                return (
                  <div
                    key={todo.id}
                    style={{
                      float: "left",
                      display: "flex",
                      flexWrap: "nowwrap",
                      gap: "12px",
                      width: "270px",
                      border: "4px solid pink",
                      minHeight: "150px",
                      borderRadius: "12px",
                      margin: "10px",
                      paddingLeft: "12px 24px 24px",
                      paddingBottom: "20px",
                    }}
                  >
                    <p style={{ display: "none" }}>{todo.id}</p>
                    <h3>{todo.title}</h3>
                    <p>{todo.contents}</p>
                    <p style={{ display: "none" }}>
                      완료여부: {todo.isDone.toString()}
                    </p>
                    <div
                      style={{
                        display: "block",
                      }}
                    >
                      <button
                        onClick={() => {
                          const newTodos = todos.map((item) => {
                            if (item.id === todo.id) {
                              return {
                                ...item,
                                isDone: !item.isDone,
                              };
                            } else {
                              return item;
                            }
                          });

                          setTodos(newTodos);
                        }}
                      >
                        완료
                      </button>
                      <button
                        onClick={() => {
                          const deletedTodos = todos.filter((item) => {
                            return item.id !== todo.id;
                          });

                          setTodos(deletedTodos);
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <h2>Done..! 🎉</h2>
              {doneList.map(function (todo) {
                return (
                  <div
                    key={todo.id}
                    style={{
                      float: "left",
                      display: "flex",
                      flexWrap: "nowwrap",
                      gap: "12px",
                      width: "270px",
                      border: "4px solid pink",
                      minHeight: "150px",
                      borderRadius: "12px",
                      margin: "10px",
                      paddingLeft: "12px 24px 24px",
                      paddingBottom: "20px",
                    }}
                  >
                    <p style={{ display: "none" }}>{todo.id}</p>
                    <h3>{todo.title}</h3>
                    <p>{todo.contents}</p>
                    <p style={{ display: "none" }}>
                      완료여부: {todo.isDone.toString()}
                    </p>
                    <button
                      onClick={() => {
                        const newTodos = todos.map((item) => {
                          if (item.id === todo.id) {
                            return {
                              ...item,
                              isDone: !item.isDone,
                            };
                          } else {
                            return item;
                          }
                        });

                        setTodos(newTodos);
                      }}
                    >
                      완료취소
                    </button>
                    <button
                      onClick={() => {
                        const deletedTodos = todos.filter((item) => {
                          return item.id !== todo.id;
                        });

                        setTodos(deletedTodos);
                      }}
                    >
                      삭제
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
      <footer
        style={{
          backgroundColor: "#b8c3fc",
          padding: "10px",
        }}
      >
        {/* 푸터임다 */}
      </footer>
    </div>
  );
}

export default App;
