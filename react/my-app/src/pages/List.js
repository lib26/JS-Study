import React from 'react';

const User = ({ userData }) => {
  console.log(userData.name);
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
};

const UserList = () => {
  const users = [
    { email: '가방', name: '홍길동' },
    { email: '모자', name: '임인범' },
    { email: '핸드폰', name: '신승건' },
    { email: '지갑', name: '이현호' },
  ]; // 예를들어 서버에서 받오온 데이터라면

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>소지품</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <User userData={user} /> //User는 자식 컴포넌트
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
