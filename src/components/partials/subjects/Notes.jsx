import React from "react"
import { HashLink as Link } from "react-router-hash-link"
import { useParams } from "react-router-dom"
import BigLink from "../components/BigLink"

export default function Notes() {
    const id = useParams().note

    const notes = {
        "election-51": (
            <>
                <h1 id="election-50">1950 Election</h1>
                <div id="maintext">
                    <p>The next General Election after the <Link to={"../labour-45-51#election-45"}>1945 election</Link> was in 1950. Despite the success of the Welfare State & the NHS, people were increasingly frustrated with the poor economy & lack of luxuries. This was reflected in the turnout of the election - 84% of the country voted, which is the highest ever under universal suffrage. While Labour did increase their voter turnout, they lost many seats & gained a slim majority of 5</p>
                    <br />
                    <h1 id="election-51" style={{paddingLeft: 0}}>1951 Election</h1>
                    <p>On the 25<sup>th</sup> of October 1951, Atlee called a snap election to try and increase their majority. They did gain over 500k votes than the year prior, and they still had more voters than the Conservatives. However, they lost many seats & lost to the Conservatives - who had gained a 17-seat majority.</p>
                    <br />
                    <h3 id="labour-weakness">Labour Weakness</h3>
                    <p>Labour had been in power since the 1945 election, and had to deal with most of the post-war recovery. This included crippling debt, rationing, and a major housing shortage. As a result, many people attributed 'austerity' & 'rationing' towards Labour, and wanted to return to a normal way of life with a strong economy & being able to afford the essentials without rationing.</p>
                    <br />
                    <p>Internally, Labour was incredibly divided - the party had been split into two. The more radical & left-leaning of the party wanted Britain to become more socialist by nationalising more & making more services free to use. However this wasn't popular with the electorate since they couldn't come up with a way to pay for it. They also got into arguments with the more center-leaning side of the party.</p>
                    <br />
                    <p>However, this wasn't the main reason why Labour lost - they beat the Conservatives with the number of votes & got the highest number of votes until 1992 & 2019.</p>
                    <br />
                    <h3 id="conservatives-strengths">Conservative's Strenghts</h3>
                    <p>The Conservatives were shocked after their loss in 1945. As such, they were forced to restructure the party. This was led by Lord Woolton, who reformed party finances & local organisation, which allowed them to take advantage of Labour's weaknesses. They criticised Labour's nationalisation of steel & iron, and promised to build 300,000 new houses a year compared to Labour's 200,000. However, they knew that Labour's policies were popular, so the Conservatives committed to expanding the Welfare State & the end of rationing through offering more 'red meat' <i>(this was a popular item that was still rationed until 1954)</i>.</p>
                    <br />
                    <h3 id="electoral-system">Electoral System</h3>
                    <p>While Labour did increase their number of voters, this was typically in 'safe' areas which already had a majority of Labour voters - which meant that there wouldn't be an increase in the number of seats. In contrast, the Conservatives focused on flipping swing states, which gained them a lot of seats. Also, Labour reformed boundary changes for voting, which led to them requiring more votes for the same number of seats.</p>
                    <br />
                    <p>The collapse of the Liberal party helped contribute to this. Due to poor finances, they could only afford to contest 109 seats, which left many Liberal voters unable to support their party. As a result, many of these voters switched & voted for Conservatives.</p>
                </div>
            </>
        ),
        "conservatives-51-64": (
            <>
                <h1>Conservative Domination</h1>
                <div id="maintext">
                    <p>From 1951 to 1964, the Conservatives dominated the government due to a variety of factors. However, by 1964, public faith in the party had dropped drastically & a new Labour government was formed.</p>
                    <br />
                    <br />
                    <div className="dual">
                        <BigLink title={"Domination"} location={"../conservative-domination-51-64"} />
                        <BigLink title={"Leaders"} location={"../conservative-leaders-51-64"} />
                        <BigLink title={"Labour Weakness"} location={"../labour-weakness-51-64"} />
                        <BigLink title={"Decline"} location={"../conservative-decline-51-64"} />
                    </div>
                </div>
            </>
        ),
        "conservative-domination-51-64": (
            <>
                <h1>Conservative Domination</h1>
                <div id="maintext">
                    <p>There are a variety of factors that resulted in the Conservatives staying in power for 13 years:</p>
                    <br />
                    <h3 id="living-standards">Wages & Living Standards</h3>
                    <p>Living standards rose significantly in the 1950's as Britain recovered from WW2 & the Korean War. A combination of wages rising faster than prices & a decrease in income tax just before elections increased consumer purchasing power, which allowed people to spend more money & splash out on more luxurious things. For example, car ownership rose 500%, the number of people owning labour-reducing machines <i>(like fridges & washing machines)</i> rose significantly & the number of people owning TVs rose from 4% to 91%.</p>
                    <br />
                    <p><Link to="../conservative-leaders-51-64#macmillan">MacMillan</Link> famously said that <i>"most people never had it so good"</i> in 1957 & claimed that <i>"live is better under the Conservatives"</i>.</p>
                    <br />
                    <h3 id="credit">Credit</h3>
                    <p>The government made it easier for people to borrow money through credit. This allowed people to splash out more on things they wouldn't usually, like holidays.</p>
                    <br />
                    <h3 id="housing">Housing</h3>
                    <p>The Conservatives reached their <Link to="../election-51#election-51">election</Link> promise of 300,000 new houses a year by 1954 & overall built 1.7 million new houses. This, combined with the higher purchasing power, helped rapidly increase the number of people owning their own properties & decreased the waiting list for getting a home. They also removed controls & limits on rent, which allowed many more people to rent properties. However, this also helped raise rent for some.</p>
                    <br />
                    <h3 id="economy">Economic Policies</h3>
                    <p>At the time, both the Conservatives & Labour had similar economic policies - which was named Butskellism. They wanted higher funding for the welfare state, a strong industry & full employment. However, the Conservatives implemented stop-go economic policies - where the government would switch between stimulating & restricting the economy. This was an alternative to developing an economic strategy to have consistent growth. If spending & wages rose rapidly, taxes & interest rates would increase, and import controls would be introduced. If spending was reduced, then taxes & interest rates fell, and import controls would be relaxed. However, it failed for several reasons:</p>
                    <br />
                    <ul>
                        <li>Stagflation happened - where industrial output dropped but inflation stayed the same.</li>
                        <li>There was an increase in imports & exports were reduced due to British goods becoming too expensive to manufacture.</li>
                        <li>Policies based on stop-go were unstable & hindered growth as it prevented building a strong economic base.</li>
                        <li>The government failed to invest in key industries - like textiles & shipbuilding - and failed to invest in industrial research & development, which hindered growth.</li>
                        <li>Despite MacMillan's claims, unemployment still steadily rose:</li>
                        <ul>
                            <li>370k unemployed in 1951,</li>
                            <li>300k unemployed in 1956,</li>
                            <li>880k unemployed in 1963.</li>
                        </ul>
                    </ul>
                    <br />
                    <h3 id="social-policy">Social Policies</h3>
                    <p>After WW2, there was a massive societal shift. People of different classes fought alongside each other during the war & women worked traditionally 'male' jobs. The blur of class distinctions was helped by the welfare state - since people were better off, more people owned houses & the gap between the working and middle classes shrunk.</p>
                    <br />
                    <p>The Conservatives replaced the old three-tier education system with the comprehensive system. The old system featured an '11 Plus' exam to determine what type of school a child should go to: a grammar school for those more academically-inclined, a secondary-technical for those more technically-minded, and a secondary-modern for people who didn't fit in either. This was replaced by a new system, which abolished the '11 Plus' & made people attend schools in their local catchment area. This would increase competitiveness between local schools & boost their quality of education, as well as allowing everyone an equal access to knowledge & education.</p>
                </div>
            </>
        ),
        "conservative-leaders-51-64": (
            <>
                <h1>Conservative Leaders</h1>
                <div id="maintext">
                    <h2 id="churchill">Churchill</h2>
                    <p>By 1951, Churchill was an old man. He was just a figurehead for the government, and his vote was more of a 'thank you' for WW2. As a result, his Chancellor R. A. Butler ran the country for him. He had been responsible for reforming the Conservatives after the failure of the <Link to={"../labour-45-51#election-45"}>1945 election</Link>, which led to the success in <Link to={"../election-51#election-51"}>1951 election</Link>.</p>
                    <br />
                    <h2 id="eden">Eden</h2>
                    <p>Churchill resigned in 1955 & was replaced by Antony Eden. To help strengthen the Conservatives, he called an election immediately after taking office, which increased the Conservative majority. This was due to his personal appeal - he attracted many women voters due to him being attractive & well-dressed.</p>
                    <br />
                    <h3 id="suez">Suez Crisis</h3>
                    <p>On the 26<sup>th</sup> of July 1956, Nasser <i>(president of Egypt)</i> suddenly announced that the Suez canal would be nationalised & owned by Egypt. This made Britain & France furious as previously they had owned the canal. Therefore, secret meetings between the two nations were held & they devised a plan - Israel was to invade Egypt, and Britain & France were to act as peacemakers to try and restore their control of the Suez region. The plan was a military success. However, there were many public protests against the war, and there were mass military desertions. Also, both the US & USSR joined forces at the UN & called for an end of the invasion. Britain were forced to retreat; they had also lost access to oil in the region & US aid. As a result, Eden resigned.</p>
                    <br />
                    <h2 id="macmillan">MacMillan</h2>
                    <p>Harold MacMillan replaced Eden's short reign. Initially, he was successful - the high <Link to="../conservative-domination-51-64#economy">living standards</Link> continued & people lived comfortably. As a result, the Conservatives increased their majority again in the 1959 election. To appear more progressive, they also supported a change in values like the abolishment of the death penalty & dismantle of the <Link to="../empire">Empire</Link>.</p>
                    <br />
                    <p>By the turn of the 1960's, the economic issues of <Link to="../conservative-domination-51-64#economy">stop-go economics</Link> started to appear, which contributed to their eventual <Link to="../conservative-decline-51-64#economic-issues">decline</Link>. To try and fix this, MacMillan reshuffled his cabinet in what was known as the 'Night of the Long Knives' in July 1962. 7 out of the 20 members of the cabinet were replaced, due to MacMillan being scared by Labour & Liberal successes in by-elections & opinion polls. However, this tanked his popularity, as people saw it as stabbing his friends & colleagues in the back. He also tried to join the successful EEC, but this <Link to="../conservative-decline-51-64#eec-rejection">failed</Link>. Several <Link to="../conservative-decline-51-64#scandals">scandals</Link> started to surface too, which made the public very critical of the government & MacMillan. Due to his declining popularity, he resigned in 1963.</p>
                    <br />
                    <h2 id="douglas-home">Douglas-Home</h2>
                    <p>Alec Douglas-Home was popular within the Conservatives & was backed by MacMillan. As a result, the party elected him as leader & he became Prime Minister. However, this method of only allowing the inner Conservative party members to vote in the new Prime Minister was controversial to the public, and showed that they were out of touch. This was reflected in the <Link to="../election-64">1964 election</Link>, where they lost to the <Link to={"../election-64#wilson-leadership"}>reformed Labour party under Harold Wilson.</Link></p>
                </div>
            </>
        ),
        "conservative-decline-51-64": (
            <>
                <h1>Conservative Decline</h1>
                <div id="maintext">
                    <p>During the Conservative's 13 years in power, their public support massively declined.</p>
                    <br />
                    <h2 id="economic-issues">Economic Issues</h2>
                    <p>By the 1960's, the issues with <Link to={"../conservative-domination#economy"}>stop-go economics</Link> were starting to show. The main issue was a large balance of payments deficit - where Britain was importing more than they were exporting. This was due to several factors:</p>
                    <br />
                    <ul>
                        <li>Due to the lack of investment in British industries, British goods were expensive to manufacture & often very poor quality. As a result, they were unpopular to export & Britons preferred better-quality foreign goods.</li>
                        <li>People missed out on buying luxuries during WW2 & post-war rationing. Once it ended, and people started earning more, there was a massive influx in luxury items being bought. Most of these were foreign-made.</li>
                    </ul>
                    <br />
                    <p>Any attempts to fix this was ineffective. They tried to pause pay in the public sector, but this didn't slow the amount of imports. A National Economic Development Council <i>(NEDC)</i> was set up, which included representatives from the government, trade unions & industrial managers. They failed to come up with a successful strategy to deal with the deficit. A National Incomes Committee <i>(NIC)</i> was set up to try and control incomes, which would help deal with the number of imports & inflation. However, this didn't work.</p>
                    <br />
                    <p>Unemployment also skyrocketed, despite <Link to={"../conservative-leaders-51-64#macmillan"}>MacMillan's</Link> claims - there were 800,000 unemployed people by the end of 1963, with the North & Scotland being badly affected. Those that did work also were on strike, most notably in the docks. This badly affected the economy as they controlled imports & exports, and this is severely limited when a strike is happening.</p>
                    <br />
                    <h3 id="eec-rejection">EEC Rejection</h3>
                    <p>Several European nations had set up a European Economic Committee <i>(EEC)</i> to establish a common trade area & helped promote friendly relations. Compared to Britain, the EEC countries were doing much better economically. Britain also was no longer a world power - this was evident through the <Link to={"../conservative-leaders-51-64#suez"}>Suez Crisis</Link> & the collapse of the Empire. However, <Link to={"../churchill-de-gaulle"}>De Gaulle</Link> vetoed the the application, stating that Britain focused too much on the Commonwealth countries <i>(like New Zealand, Australia & Canada)</i> and America, rather than European interests.</p>
                    <br />
                    <h2 id="scandals">Scandals</h2>
                    <p>There were several scandals that weakened MacMillan's support, and helped contribute to their decline.</p>
                    <br />
                    <h3 id="vassal">Vassal Affair</h3>
                    <p>John Vassal was a civil servant in the Admiralty who spied for the Soviet Union. Rumours suggested that he was protected by senior members, however there was no evidence. This created public distrust towards the civil servants & Admiralty, and showed that there were spies within the government.</p>
                    <br />
                    <h3 id="philby">Philby Case</h3>
                    <p>Kim Philby was a senior official at the Foreign Office, and had been passing information to the Soviet Union & recruiting spies for them. He had successfully fled to Russia in 1963. This showed that the Secret Service weren't doing their jobs properly, especially since more spies were recruited & he got away safely.</p>
                    <br />
                    <h3 id="argyll">Argyll Divorce</h3>
                    <p>In 1963, the Duke of Argyll sued his (ex)-wife for adultery. She allegedly slept with 88 people, and had engaged in group sex. Some of these people were rumoured to be government ministers, as well as important British & American figures. This created distrust towards MPs, as they engaged in acts that the public disliked in their private lives.</p>
                    <br />
                    <h2 id="social-issues">Social Issues</h2>
                    <p>After WW2, class barriers began to break down and the Conservatives had helped this through their <Link to="../conservative-domination-51-64#social-policy">education reforms</Link>. However, WW2 resulted in many working-class men dying in the battlefields, so the <Link to="../labour-45-51">post-war Labour government</Link> introduced the British Nationality Act in 1948. This allowed any citizen of a Commonwealth country to hold a British passport & come work in the UK. This caused a mass influx of immigrants from all over the old British Empire, especially after the violent partition of India & the Cyprus civil war.</p>
                    <br />
                    <h3 id="race-riots">Race Riots</h3>
                    <p>However, many Britons disliked this influx of immigrants and struggled to adapt to a multiracial society. Immigrants were blamed for housing shortages, simply because they were occupying houses where rent was cheap. They were also blamed for the job shortages, since they often accepted jobs with lower pay than average. Tensions spilled in 1958-59 & riots emerged in many parts of the countries including London, Bristol & Nottingham. Notting Hill was a notable example - youths attacked properties owned by black people. Police struggled to contain these riots, but gave out harsh sentences to those that were caught.</p>
                    <br />
                    <p>The government tried to help by launching the Salmon Inquiry. This deduced that the riots were due to an increase in immigration, and failed to mention the discrimination immigrants faced when looking for housing or employment. The government also introduced the 1962 Commonwealth Immigration Act, which introduced quota immigration limits from each Commonwealth country. However, this created a rush of immigrants that wanted to avoid the restrictions, which made the situation worse.</p>
                    <br />
                    <h3 id="youth-riots">Youth Riots</h3>
                    <p>During the 1950's & 1960's, a youth culture formed that had interests & beliefs that opposed their elders, and often caused violence between the different sub-cultures. One reason for all this was due to a rise in <Link to={"../conservative-domination-51-64#living-standards"}>affluence</Link>, since the youth could afford new things like transistor radios - however, not everyone could and this resulted in an increase in antisocial behaviour. Another reason was due to the fact that they never grew up with the horrors of war, so they didn't feel attracted to strict hierarchical structures and authority. The various scandals of the Conservatives helped add to this, as well as the link between the Conservatives & traditional values. This culminated with the release of several satirical political pieces like 'Private Eye' & 'That Was The Week That Was', and the rise of new entertainment like Rock 'n Roll music.</p>
                </div>
            </>
        ),
        "labour-weakness-51-64": (
            <>
                <h1>Labour's Weaknesses</h1>
                <div id="maintext">
                    <p>During the 1950's, Labour became a very weak party, for a variety of factors:</p>
                    <br />
                    <h3 id="leadership">Leadership & Political Stance</h3>
                    <p>A divide formed in the Labour party after they lost the <Link to="../election-51#election-51">1951 election</Link>. There were those on the left of the party like Aneurin Bevan, who were known as the fundamentalists. They thought that the Welfare State was the first step towards a fully Socialist Britain, that union leaders should have a say in parliamentary policies, and wanted to nationalise more services through Clause IV <i>(the Labour policy that focuses on nationalising key services)</i>.</p>
                    <br />
                    <p>There were also those on the right of the party like Hugh Gaitskell, who were known as the revisionists. They wanted to modernise the Labour party & wanted to focus more on social equality than economic change, abolish Clause IV, and wanted people in parliament make policies rather than union leaders. This divide was widened when Gaitskell became the Labour party leader after Attlee retired in 1955.</p>
                    <br />
                    <h3 id="nuclear">Nuclear Policy</h3>
                    <p>There was also a divide on nuclear bombs. The revisionists wanted to maintain Britain's nuclear deterrence & for West Germany to enter NATO. However, the fundamentalists wanted nuclear disarmament instead. They argued that the money was better spent on welfare programs & they didn't want the Soviet Union to fall behind in the arms race. They also didn't want West Germany to join NATO as they feared that it would isolate & scare away the Soviet Union.</p>
                    <br />
                    <h3 id="economic-manipulation">Economic Manipulation</h3>
                    <p>The 1959 election was won by <Link to="../conservative-leaders-51-63#macmillan">MacMillan</Link> however Gaitskill had a chance to win. The <Link to="../conservative-leaders-51-63#suez">Suez crisis</Link> was still in the minds of the voters, and people were starting to become aware of the economic manipulation by the Conservatives through their pre-election budgets. They would release 'give-away' budgets in the run-up to the election, which would lower taxes & promote economic recovery; this would increase their voters & give power to MacMillan's claim that "Life is better under the Conservatives". Post-election, they would send out a more controversial budget, which would increase taxes & recoup their lost cash in the 'give-away' budget.</p>
                    <br />
                    <p>However, a 'give-away' budget helped win the election & was still enough to sway voters. Also, Labour's budget ideas were unrealistic - they wanted to increase old-age pensions without an increase in tax. People started asking how they would fund it, to which Labour gave unconvincing arguments & solutions. They were also against joining the EEC <i>(something which the Conservatives were <Link to="../conservative-decline-51-64#eec-rejection">trying to do</Link> & was popular with the voters)</i>, which damaged their 'modern & progressive' reputation.</p>
                </div>
            </>
        ),
        "election-64": (
            <>
                <h1>1964 Election</h1>
                <div id="maintext">
                    <p>An election was called in 1964, which led to the victory of Labour & the end of the <Link to="../conservatives-51-64">13 years of Conservative domination</Link>. However, what was apparent that this was due to a rejection of the Conservatives, rather than an endorsement of Labour.</p>
                    <br />
                    <h3 id="wilson-leadership">Harold Wilson's Leadership</h3>
                    <p>After Gaitskell died in 1963, Harold Wilson was elected leader. He managed to gloss over any <Link to="../labour-weakness-51-64">internal divisions</Link> & portrayed Labour as 'modern, progressive & dynamic'. This was also alongside a new election manifesto that offered full employment, economic growth, and increased welfare, healthcare and housing. He was also seen as a classless professional due to his more humble background - a man of the people to lead a new scientific & advanced Britain. However, this was not reflected in the polls - Labour received 10,000 less votes than the 1959 election.</p>
                    <br />
                    <h3 id="public-view-conservatives">Public Perception of the Conservatives</h3>
                    <p>The Conservatives were blamed for the <Link to="../conservative-decline-51-64#economic-issues">economic issues</Link> & failed to tackle rising unemployment, inflation, class gap & industrial worries. They were also out of touch due to the various <Link to="../conservative-decline-51-64#scandals">scandals</Link> & the <Link to="../conservative-leaders-51-64#douglas-home">Earl of Home</Link> being their leader - people saw them as old-fashioned, elite & self-righteous.</p>
                    <br />
                    <h3 id="liberal-revival">Liberal Revival</h3>
                    <p>Many people disliked the Conservatives, but couldn't bring themselves to vote Labour. Therefore, the Liberals gained twice as many votes compared to 1959, and increased their seats from 9 to 12. Most of these votes were stolen from the Conservatives, which allowed Labour to have the majority and win the election.</p>
                    <br />
                    <p>The gain in voters was also due to more publicity, funding & new people. This meant they could contest more seats than before, thus being an option for more people. Previously, they didn't have the money or support to contest many seats - however this had changed due to the decline of the Conservatives.</p>
                    <br />
                    <h3 id="change-in-society">Changes in 1950's Society</h3>
                    <p>A rise in living standards allowed people to have more money & be more independent, therefore being less likely to accept traditional values & opt for more progressive values instead. This often led to many <Link to="../conservative-decline-51-64#youth-riots">youth riots</Link>. Underprivileged youth also had better access to education, which led to a blur of the class divide. These youth also wanted a classless, scientific & technologically advanced society, which Labour promised them.</p>
                </div>
            </>
        )
    }

    return (
        <>
            <p>{notes[id]}</p>
            <br />
        </>
    )
}