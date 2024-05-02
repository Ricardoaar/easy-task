import { Task } from "@easy-task/types";
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Stack } from "@mui/material";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
      <h2>Following task comes from a monorepo!</h2>
      <Stack width={'100%'} >
        <Accordion sx={{width:'100%'}} disableGutters>
          <AccordionSummary>
            Task 1
          </AccordionSummary>
          <AccordionDetails>
            <Stack>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Task1" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Task3" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Task2" />
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters>
          <AccordionSummary>
            Task 1
          </AccordionSummary>
          <AccordionDetails>
            <Stack>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Task1" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Task3" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Task2" />
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </main>
  );
}
