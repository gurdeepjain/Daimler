// Add New Module Component(Progress Bar)

import React from "react";
import { makeStyles, createStyles, withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ModuleName from '../screen/addNewModuleScreen/moduleName';
import SetProjectInput from '../screen/addNewModuleScreen/setProjectInput';
import SetIlGates from '../screen/addNewModuleScreen/setilGates';
import SetApproval from '../screen/addNewModuleScreen/setApproval';

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;


  // Icon Number
  const icons = {
    1: "1",
    2: "2",
    3: "3",
    4: "4"
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}


// Text below Number count
function getSteps() {
  return ["Module Name", "Set Project Inputs", "Set IL Gates", "Set Approval"];
}


// Component of individual screen 
function getStepContent(step) {
  switch (step) {
    case 0:
      return <ModuleName />;
    case 1:
      return <SetProjectInput />;
    case 2:
      return <SetIlGates />;
    case 3:
      return <SetApproval />;
    default:
      return "Unknown step";
  }
}


//  screen render
export default function AddNewModule() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (

    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button} style={{ color: 'white', margin: "20px 70px" }}>
              Reset
            </Button>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                  style={{ backgroundColor: '#EE2219', color: "white", marginRight: 70 }}
                >
                  Back
              </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundColor: "#0C961C"
    }
  },
  completed: {
    "& $line": {
      backgroundColor: "#0C961C"
    }
  },
  line: {
    height: 5,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 2
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundColor: "#343A52",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundColor: "#0C961C"
  }
});

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    button: {
      marginRight: theme.spacing(1),
      float: 'right',
      backgroundColor: '#343A52',
      borderRadius: 7,
      fontSize: 12,
      padding: "10px 20px",
      margin: "20px 0px"
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })
);
