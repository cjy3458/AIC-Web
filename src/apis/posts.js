import axios from "axios";

const baseUrl = `https://all-it-chat.o-r.kr/posts`;

// 모든 게시글 조회
export const getAllPost = async () => {
  const result = await axios.get(`${baseUrl}/`);
  return result.data;
};

// 대륙별 꿀팁 조회
export const getPostsOfContinent = async (continent) => {
  const result = await axios.get(`${baseUrl}/${continent}/`);
  return result;
};

// 특정 게시글 조회
export const getPost = async (postId) => {
  const result = await axios.get(`${baseUrl}/${postId}/`);
  return result;
};

// 게시글 생성
export const postNewTip = async (formData) => {
  const token = localStorage.getItem("access");
  try {
    const response = await axios.post(`${baseUrl}/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("게시물 업로드 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending POST request:", error);
    throw error;
  }
};

// 게시글 삭제
export const deletePost = async (postId) => {
  const token = localStorage.getItem("access");
  const response = await axios.delete(`${baseUrl}/${postId}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("게시물 삭제 성공:", response.data);
  return response.data;
};

// 게시글 수정
export const editPost = async (postId,formData) => {
  const token = localStorage.getItem("access");
  const response = await axios.put(`${baseUrl}/${postId}/`,formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("게시물 수정 성공:", response.data);
  return response.data;
};