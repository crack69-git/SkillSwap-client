"use client";
import {
  getFreelancerProposals,
  submitProposal,
} from "@/lib/actions/freelancerProposals";
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
} from "@heroui/react";

const DetailProposalForm = ({ id }) => {
  const { data: session } = authClient.useSession();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
    const proposalData = {
      bid: data.bid,
      date: data.date,
      note: data.note,
      freelancerId: session?.user?.id,
      taskId: id,
      freelancerName: session?.user?.name,
      status: "pending",
    };
    const getproposal = await getFreelancerProposals(session?.user?.id);
    const existingProposal = getproposal.find(
      (proposal) => proposal.taskId === id,
    );
    if (existingProposal) {
      alert("You have already submitted a proposal for this task.");
      return;
    } else {
      const res = await submitProposal(proposalData);
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
            <Button type="submit" className="w-full">
              <FloppyDisk />
              Submit Proposal
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
};

export default DetailProposalForm;
