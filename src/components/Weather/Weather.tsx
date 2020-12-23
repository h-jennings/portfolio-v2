import fetch from 'isomorphic-fetch';
import React from 'react';
import {
  EffectFunction,
  EffectReducer,
  useEffectReducer,
} from 'use-effect-reducer';

interface WeatherData {
  temp: number;
  icon: string;
  description: string;
}

type WeatherState =
  | {
      status: 'idle';
      weather: undefined;
    }
  | {
      status: 'loading';
      weather: WeatherData | undefined;
    }
  | {
      status: 'failure';
      weather: undefined;
    }
  | {
      status: 'success';
      weather: WeatherData;
    };

type WeatherActions =
  | {
      type: 'FETCH';
    }
  | {
      type: 'RESOLVE';
      data: WeatherData;
    }
  | {
      type: 'REJECT';
    };

type WeatherEffects = {
  type: 'fetchWeather';
};

const weatherReducer: EffectReducer<
  WeatherState,
  WeatherActions,
  WeatherEffects
> = (state, action, exec) => {
  switch (state.status) {
    case 'idle':
    case 'failure':
    case 'success': {
      switch (action.type) {
        case 'FETCH': {
          exec({ type: 'fetchWeather' });
          return {
            ...state,
            status: 'loading',
            weather: undefined,
          };
        }

        default:
          return state;
      }
    }
    case 'loading': {
      switch (action.type) {
        case 'REJECT': {
          return {
            ...state,
            status: 'failure',
            weather: undefined,
          };
        }
        case 'RESOLVE': {
          return {
            ...state,
            status: 'success',
            weather: action.data,
          };
        }

        default:
          return state;
      }
    }
    default:
      return state;
  }
};

const initialWeatherState: WeatherState = {
  status: 'idle',
  weather: undefined,
};

const fetchWeather: EffectFunction<
  WeatherState,
  WeatherActions,
  WeatherEffects
> = (_state, _effect, dispatch) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=4140963&units=imperial&appid=${process.env.WEATHER_API_KEY}`;

  fetch(apiUrl)
    .then((data) => data.json())
    .then((data) => {
      const temp: number = data?.main?.temp;
      const icon: string = data?.weather[0]?.icon;
      const description: string = data?.weather[0]?.description;

      dispatch({ type: 'RESOLVE', data: { temp, icon, description } });
    })
    .catch(() => {
      dispatch({ type: 'REJECT' });
    });
};

export const Weather: React.FC = () => {
  const [weatherData, dispatch] = useEffectReducer(
    weatherReducer,
    initialWeatherState,
    {
      fetchWeather,
    },
  );
  const { status, weather } = weatherData;

  React.useEffect(
    function fetchDataOnMount() {
      let _isCancelled = false;
      if (!_isCancelled) {
        dispatch({ type: 'FETCH' });
      }
      return () => {
        _isCancelled = true;
      };
    },
    [dispatch],
  );

  return (
    <>
      {status === 'success' ? (
        <div>
          {weather?.icon ? (
            <img
              style={{ width: 25, display: 'block' }}
              src={`https://openweathermap.org/img/wn/${weather?.icon}.png`}
              alt={weather.description}
            />
          ) : null}
          <p>{weather?.temp && Math.round(weather.temp)}&deg;F</p>
        </div>
      ) : null}
    </>
  );
};
