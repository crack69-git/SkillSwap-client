"use client";
import {
  getFreelancerProposals,
  getSingleTask,
  submitProposal,
} from "@/lib/actions/freelancerProposals";
import { getToken } from "@/lib/actions/tokenGet";
import { authClient } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  DateField,
  Modal,
} from "@heroui/react";
import { Rocket } from "lucide-react";
import { GoFileSubmodule } from "react-icons/go";

const DetailProposalForm = ({ data: current }) => {
  const variant = "blur";
  const { data: session } = authClient.useSession();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const toady = new Date();
    const token = await getToken();
    const proposalData = {
      clientId: current.clientId,
      bid: data.bid,
      date: data.date,
      currentDate: toady,
      note: data.note,
      freelancerName: session?.user?.name,
      taskId: current._id,
      taskTitle: current.TaskTitle,
      freelancerMail: session?.user?.email,
      status: "pending",
    };

    const getproposal = await getFreelancerProposals(session?.user?.id, token);
    const existingProposal = getproposal.find(
      (proposal) => proposal.taskId === current._id,
    );
    if (existingProposal) {
      alert("You have already submitted a proposal for this task.");
      return;
    } else {
      const res = await submitProposal(proposalData, token);
      if (res) {
        alert("Proposal submitted successfully!");
        e.target.reset();
      } else {
        alert("Failed to submit proposal. Please try again.");
      }
    }
  };

  return (
    <div className="p-4">
      {" "}
      <Form className="w-full max-w-96" onSubmit={onSubmit}>
        <Fieldset>
          <FieldGroup>
            <TextField isRequired name="bid" type="number">
              <Label>Bid</Label>
              <Input placeholder="$0.00" />
              <FieldError />
            </TextField>
            <DateField className="w-full" name="date">
              <Label>Estimate Delivery Date</Label>
              <DateField.Group>
                <DateField.Input>
                  {(segment) => <DateField.Segment segment={segment} />}
                </DateField.Input>
              </DateField.Group>
            </DateField>
            <TextField isRequired name="note">
              <Label>Note</Label>
              <TextArea placeholder="Leave client a note" />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Modal key={variant}>
              <Button variant="secondary" className="w-full">
                <GoFileSubmodule className="mr-2" /> Submit Proposal
              </Button>

              <Modal.Backdrop variant={variant}>
                <Modal.Container>
                  <Modal.Dialog className="sm:max-w-[360px]">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                      <Modal.Icon className="bg-default text-foreground">
                        <Rocket className="size-5" />
                      </Modal.Icon>
                      <Modal.Heading>
                        Submit Proposal Confirmation
                      </Modal.Heading>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Are you sure you want to submit this proposal?</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        onPress={() =>
                          document.getElementById("proposal-submit").click()
                        }
                        className="w-full"
                        slot="close"
                      >
                        Submit Proposal
                      </Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
            <Button id="proposal-submit" type="submit" className="hidden" />
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
};

export default DetailProposalForm;
