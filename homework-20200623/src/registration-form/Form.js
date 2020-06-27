import React, { Component } from "react";

import "./style.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      pass: "",
      avatar: "",
      phone: "",
      age: 1,
      gender: "male",
      favorite: {
        soccer: false,
        badminton: false,
        sailing: false,
      },
      note: "Buổi học đầu tiên về html",
    };
  }

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleOnChangePass = (event) => {
    this.setState({
      pass: event.target.value,
    });
  };

  handleOnChangeAvatar = (event) => {
    this.setState({
      avatar: event.target.value,
    });
  };

  handleOnChangePhone = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnChangeGender = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  handleOnChangeNote = (event) => {
    this.setState({
      note: event.target.value,
    });
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
                  type="text"
                  value={name}
                  onChange={this.handleOnChangeName}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={this.handleOnChangeEmail}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Mật khẩu:</label>
              </td>
              <td>
                <input
                  type="password"
                  value={pass}
                  onChange={this.handleOnChangePass}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Avatar:</label>
              </td>
              <td>
                <input
                  type="file"
                  value={avatar}
                  onChange={this.handleOnChangeAvatar}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Số điện thoại:</label>
              </td>
              <td>
                <input
                  type="number"
                  value={phone}
                  onChange={this.handleOnChangePhone}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Tuổi:</label>
              </td>
              <td>
                <select value={age} onChange={this.handleOnChangeAge}>
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
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={this.handleOnChangeGender}
                />
                Nam
                <br />
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={this.handleOnChangeGender}
                />{" "}
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
                />{" "}
                Đá bóng <br />
                <input
                  type="checkbox"
                  value="badminton"
                  defaultChecked={favorite.badminton}
                  onClick={this.handleOnChangeBadminton}
                />{" "}
                Cầu lông <br />
                <input
                  type="checkbox"
                  value="sailing"
                  defaultChecked={favorite.sailing}
                  onClick={this.handleOnChangeSailing}
                />{" "}
                Đua thuyền
              </td>
            </tr>
            <tr>
              <td>
                <label>Ghi chú:</label>
              </td>
              <td>
                <textarea
                  rows="3"
                  cols="25"
                  value={note}
                  onChange={this.handleOnChangeNote}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" onClick={this.handleOnSubmit}>
          Đăng kí
        </button>
      </div>
    );
  }
}

export default Form;
