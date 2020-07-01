import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      pass: "",
      avatar: [],
      phone: "",
      age: 1,
      gender: "male",
      favorites: [
        { id: 1, value: "soccer", isChecked: false, name: "Đá bóng" },
        { id: 2, value: "badminton", isChecked: false, name: "Cầu lông" },
        { id: 3, value: "sailing", isChecked: false, name: "Đua thuyền" },
      ],
      note: "Buổi học đầu tiên về html",
    };
  }

  handleOnChangeInput = (event) => {
    if (event.target.type === "file") {
      this.setState({
        avatar: event.target.files[0],
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  handleOnChangeSoccer = (event) => {
    this.setState((prevState) => ({
      soccer: !prevState.soccer,
    }));
  };

  handleOnChangeBadminton = (event) => {
    this.setState((prevState) => ({
      badminton: !prevState.badminton,
    }));
  };

  handleOnChangeSailing = (event) => {
    this.setState((prevState) => ({
      sailing: !prevState.sailing,
    }));
  };

  handleOnSubmit = (event) => {
    const favorites = {
      soccer: this.state.soccer,
      badminton: this.state.badminton,
      sailing: this.state.sailing,
    };
    const object = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      pass: this.state.pass,
      avatar: this.state.avatar,
      age: this.state.age,
      gender: this.state.gender,
      favorite: favorites,
      note: this.state.note,
    };
    event.preventDefault();
    console.log(object);
  };

  render() {
    const {
      name,
      email,
      pass,
      avatar,
      phone,
      age,
      gender,
      favorite,
      note,
    } = this.state;
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div className="register">
          <h1>Đăng kí thành viên</h1>
          <table>
            <thead>
              <tr>
                <th>Nội dung</th>
                <th>Giá trị</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label>Họ tên:</label>
                </td>
                <td>
                  <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={this.handleOnChangeInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email:</label>
                </td>
                <td>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handleOnChangeInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Mật khẩu:</label>
                </td>
                <td>
                  <input
                    name="pass"
                    type="password"
                    value={pass}
                    onChange={this.handleOnChangeInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Avatar:</label>
                </td>
                <td>
                  <input
                    name="file"
                    type="file"
                    value={avatar}
                    onChange={this.handleOnChangeInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Số điện thoại:</label>
                </td>
                <td>
                  <input
                    name="phone"
                    type="number"
                    value={phone}
                    onChange={this.handleOnChangeInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Tuổi:</label>
                </td>
                <td>
                  <select
                    name="age"
                    value={age}
                    onChange={this.handleOnChangeInput}
                  >
                    <option value="1">1 tuổi</option>
                    <option value="2">2 tuổi</option>
                    <option value="3">3 tuổi</option>
                    <option value="4">4 tuổi</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Giới tính:</label>
                </td>
                <td>
                  <input
                    name="gender"
                    type="radio"
                    value="male"
                    checked={gender === "male"}
                    onChange={this.handleOnChangeInput}
                  />
                  Nam
                  <br />
                  <input
                    name="gender"
                    type="radio"
                    value="female"
                    checked={gender === "female"}
                    onChange={this.handleOnChangeInput}
                  />
                  Nữ
                </td>
              </tr>
              <tr>
                <td>
                  <label>Sở thích:</label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    value="soccer"
                    defaultChecked={favorite.soccer}
                    onClick={this.handleOnChangeSoccer}
                  />
                  Đá bóng <br />
                  <input
                    type="checkbox"
                    value="badminton"
                    defaultChecked={favorite.badminton}
                    onClick={this.handleOnChangeBadminton}
                  />
                  Cầu lông <br />
                  <input
                    type="checkbox"
                    value="sailing"
                    defaultChecked={favorite.sailing}
                    onClick={this.handleOnChangeSailing}
                  />
                  Đua thuyền
                </td>
              </tr>
              <tr>
                <td>
                  <label>Ghi chú:</label>
                </td>
                <td>
                  <textarea
                    name="note"
                    rows="3"
                    cols="25"
                    value={note}
                    onChange={this.handleOnChangeInput}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" onClick={this.handleOnSubmit}>
            Đăng Ký
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
