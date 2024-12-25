import './index.css';
import 'augmented-ui';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import EvaBorderPanel from './components/EvaBorderPanel/EvaBorderPanel';
import EvaProgressBar from './components/EvaProgressBar/EvaProgressBar';
import EvaUnitBox from './components/EvaUnitBox/EvaUnitBox';
import EvaTilePanel from './components/EvaTilePanel/EvaTilePanel';
import EvaOptionList from './components/EvaOptionList/EvaOptionList';
import GeometricLayout from './components/GeometricLayout/GeometricLayout';
import Card from './components/Card/Card';
import Circle from './components/Circle/Circle';

gsap.registerPlugin(MotionPathPlugin);

export {
  EvaBorderPanel,
  EvaProgressBar,
  EvaUnitBox,
  EvaTilePanel,
  EvaOptionList,
  GeometricLayout,
  Card,
  Circle
};
