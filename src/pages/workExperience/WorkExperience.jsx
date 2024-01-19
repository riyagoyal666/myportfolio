import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import "./workExperience.css";

const WorkExperience = () => {
  return (
    <section className="work">
      <div className="workExperience">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={
              <span style={{ color: "var(--color-primary)" }}>
                May to June
              </span>
            }
            iconStyle={{
              background: "#1e386c",
              color: "rgba(255, 255, 255, 0.648)",
            }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Web development Intern -Coding Raja Technology(Virtual)
            </h3>
            <p>
              Developed and worked on tech stuffs of MERN ..Developed a Weather application website using API keys which is used for forcasting weather conditions.
            </p>
          </VerticalTimelineElement>
         
          
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={
              <span style={{ color: "var(--color-primary)" }}>
               January 2022-2024
              </span>
            }
            iconStyle={{
              background: "#1e386c",
              color: "rgba(255, 255, 255, 0.648)",
            }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Roles and Responsibilities
            </h3>
            <p>
             Worked under Jaypee Youth Club for Qriosity Club . Conducted Quiz  during events and boosts tech skills amongst juniors.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default WorkExperience;







