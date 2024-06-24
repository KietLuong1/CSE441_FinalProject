import axios from "axios";
import { Alert } from "react-native";

const Config = {
    basedURL: 'https://api.themoviedb.org/3/movie/',
    YOUTUBE_API_KEY: 'AIzaSyC7FolhlU8oTYsudrIegr5SDp1vOW_06Jk',
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmMxYjQxNzFjM2YyMzM5ODQ4OWI2Yjg4ZmZjN2ExNSIsIm5iZiI6MTcxOTA4NjU0Ni40ODQ0OTgsInN1YiI6IjY2NWQ4MzhhYWQxOWVkMDExMmEwY2QwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dwATBtXLjvmOAPVyFWiQMOqDAQz4JKXW8CIdUqZTObE',
    api_key: '76c1b4171c3f23398489b6b88ffc7a15'
};

export const searchMovies = async (query) => {
    if (query.length > 2) {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
          params: {
            api_key: Config.api_key,
            query: query
          }
        });
        return response.data;
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    }
  };

// export async function getTrailerUrl(movieTitle) {
//     try {
//       const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
//         params: {
//           part: 'snippet',
//           q: `${movieTitle} official trailer`,
//           key: Config.YOUTUBE_API_KEY,
//           type: 'video',
//           maxResults: 1
//         }
//       });
  
//       if (response.data.items.length > 0) {
//         return response.data.items[0].id.videoId;
//      }
      
//       return null;
//     } catch (error) {
//       console.error('Error fetching YouTube trailer:', error);
//       return null;
//     }
//   }

export const getUpcomingMovies = async () => {
    try {
        const response = await axios.get(`${Config.basedURL}upcoming`, {
            headers: {
                Authorization: `Bearer ${Config.token}`
            }
        })
        const data = response.data;
        const status = response.status;

        return {
            success: true,
            data: data,
            status: status
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            status: error.response ? error.response.status : 500,
            data: null
        }
    }
};
export const getNowPlayingMovies = async () => {
    try {
        const response = await axios.get(`${Config.basedURL}now_playing`, {
            headers: {
                Authorization: `Bearer ${Config.token}`
            }
        })
        const data = response.data;
        const status = response.status;

        return {
            success: true,
            data: data,
            status: status
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            status: error.response ? error.response.status : 500,
            data: null
        }
    }
};

export const getTopRatedMovies = async () => {
    try {
        const response = await axios.get(`${Config.basedURL}top_rated`, {
            headers: {
                Authorization: `Bearer ${Config.token}`
            }
        })
        const data = response.data;
        const status = response.status;

        return {
            success: true,
            data: data,
            status: status
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            status: error.response ? error.response.status : 500,
            data: null
        }
    }
};

export const getPopularMovies = async () => {
    try {
        const response = await axios.get(`${Config.basedURL}popular`, {
            headers: {
                Authorization: `Bearer ${Config.token}`
            }
        })
        const data = response.data;
        const status = response.status;

        return {
            success: true,
            data: data,
            status: status
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            status: error.response ? error.response.status : 500,
            data: null
        }
    }
};
