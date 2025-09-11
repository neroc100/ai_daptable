from sqlalchemy import Column, Integer, String, DateTime, Boolean, Text
from sqlalchemy.sql import func
from database import Base

class URL(Base):
    __tablename__ = "urls"
    
    id = Column(Integer, primary_key=True, index=True)
    url = Column(String, unique=True, index=True, nullable=False)
    classification = Column(String, nullable=False)  # 'Malicious' or 'Non-Malicious'
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class UserDecision(Base):
    __tablename__ = "user_decisions"
    
    id = Column(Integer, primary_key=True, index=True)
    url_id = Column(Integer, nullable=False)
    decision = Column(String, nullable=False)  # 'allow' or 'block'
    user_id = Column(String, nullable=True)  # Optional user identifier
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class AIAnalysis(Base):
    __tablename__ = "ai_analyses"
    
    id = Column(Integer, primary_key=True, index=True)
    url_id = Column(Integer, nullable=False)
    classification = Column(String, nullable=False)
    confidence_score = Column(String, nullable=True)
    features_analyzed = Column(Text, nullable=True)  # JSON string of features
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class ExperimentSession(Base):
    __tablename__ = "experiment_sessions"
    
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String, unique=True, index=True, nullable=False)
    condition = Column(String, nullable=False)  # 'manual', 'ai_assisted', 'ai_autonomous'
    user_id = Column(String, nullable=True)
    started_at = Column(DateTime(timezone=True), server_default=func.now())
    completed_at = Column(DateTime(timezone=True), nullable=True)
